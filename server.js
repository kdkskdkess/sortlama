const express = require("express");
const next = require('next');

const port = 80
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev })
const handle = app.getRequestHandler()
var bodyParser = require('body-parser')
const socket = require('socket.io');
const http = require("http");
const mongoose = require("mongoose");
const md = require("marked");
const axios = require("axios");
const Discord = require("discord.js");
const { Intents } = require("discord.js");
const cfg = require("./config.js");
const sendLog = require("./sendLog.js");

(async () => {
    await mongoose.connect(cfg.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
})();

mongoose.connection.on("open", () => console.log("[Mongoose] Başarıyla veritabanı aktifleştirildi"));
mongoose.connection.on("error", (err) => console.log("[Mongoose] Veritabanı etkinleştirilemedi", err))

app.prepare().then(() => {
    const app = express();

    const server = http.createServer(app);

    /* DISCORD BOT START */

    const client = new Discord.Client({ intents: [Intents.FLAGS.GUILD_MEMBERS], fetchAllMembers: true })
    var Staffs = require("./schemas/Staffs");
    var Bots = require("./schemas/Bots");

    client.on("ready", async () => {
        console.log("[BOT] Aktif!");
        sendLog(`System is ready! Ping: ${client.ws.ping}`)
        await Staffs.deleteMany({})
        client.guilds.cache.get(cfg.serverID).roles.cache.get(cfg.staffRoleID).members.filter(m => m.user.bot === false).forEach(async (member) => {
            await Staffs.updateOne({ id: member.user.id }, { tag: member.user.tag, avatar: member.user.displayAvatarURL(), admin: member.permissions.has("ADMINISTRATOR"), roleColor: member.roles.highest.hexColor }, { upsert: true })
        })
        setInterval(async () => {
            client.guilds.cache.get(cfg.serverID).roles.cache.get(cfg.staffRoleID).members.filter(m => m.user.bot === false).forEach(async (member) => {
                await Staffs.updateOne({ id: member.user.id }, { tag: member.user.tag, avatar: member.user.displayAvatarURL(), admin: member.permissions.has("ADMINISTRATOR"), roleColor: member.roles.highest.hexColor }, { upsert: true })
            })
        }, 60000)

        setInterval(async () => {
            var date = new Date();
            if(date.getDate() === 1) {
                var bots = await Bots.find({});
                bots.forEach(async(el) => {
                    await Bots.updateOne({id: el.id}, {votes: 0})
                })
            }
        }, (60000 * 60))
    })

    client.on("guildMemberUpdate", async (oldMember, newMember) => {
        if (oldMember._roles.includes(cfg.staffRoleID)) {
            if (!(newMember._roles.includes(cfg.staffRoleID))) {
                await Staffs.deleteOne({ id: oldMember.id })
            }
        }
        if (!(oldMember._roles.includes(cfg.staffRoleID))) {
            if (newMember._roles.includes(cfg.staffRoleID)) {
                await Staffs.updateOne({ id: newMember.user.id }, { tag: newMember.user.tag, avatar: newMember.user.displayAvatarURL(), admin: newMember.permissions.has("ADMINISTRATOR"), roleColor: newMember.roles.highest.hexColor }, { upsert: true })
            }
        }
    })

    client.on("guildMemberRemove", async (member) => {
        await Staffs.deleteOne({ id: member.id })
    })

    client.on("message", async (msg) => {
        function getMention(mention) {
            if (!mention) return;

            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);

                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }

                return mention;
            }

            return mention;
        }
        var Bots = require("./schemas/Bots");
        if (msg.content.startsWith("!")) {
            const args = msg.content.slice("!".length).trim().split(' ');
            const cmd = args.shift().toLowerCase();

            if (cmd === "bot-bilgi") {
                if (args[0]) {
                    var ment = getMention(args[0]);
                    var bot = await Bots.findOne({ id: ment })
                    var bots = await Bots.find({})
                    if (!bot) return msg.reply("bu ID'de bir bot yok.")
                    const embed = new Discord.MessageEmbed()
                        .setAuthor(bot.bot.name, bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}`)
                        .setDescription(bot.shortDesc)
                        .setThumbnail(bot.bot.avatar ? `https://cdn.discordapp.com/avatars/${bot.id}/${bot.bot.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}`)
                        .setColor("RANDOM")
                        .addField("Bot İsmi", bot.bot.name, true)
                        .addField("Bot ID'si", bot.id, true)
                        .addField("Oy Sayısı", bot.votes || 0, true)
                        .addField("Sunucu Sayısı", bot.servers || "N/A", true)
                        .addField("Kütüphane", bot.library, true)
                        .addField("Github", bot.github || "Yok", true)
                        .addField("Destek Sunucusu", bot.support || "Yok", true)
                        .addField("Sertifika", bot.certificate === true ? "Mevcut" : "Mevcut Değil", true)
                        .addField("Bot Sahibi", bot.owner.tag, true)
                        .addField("Bot Geliştiricileri", bot.developers.map(dev => dev.tag).join(" | "), true)
                        .addField("Bot Durumu", bot.waiting === true ? `Onaylı Değil (Onaylanma Sırasındaki Yeri: #${bots.filter((el) => el.waiting === true).map(el => el.id).indexOf(bot.id) + 1})` : `Onaylı`, true)
                    msg.channel.send(embed)
                } else {
                    msg.reply("bir bot ID'si gir.")
                }
            }
        }
    })

    client.on("guildMemberLeave", async (member) => {
        var Bots = require("./schemas/Bots");
        const bots = await Bots.find({ "developers": { $elemMatch: { "id": member.user.id } } });

        if (bots.length >= 1) {
            bots.map(async (bot) => {
                await axios(cfg.siteURL + "/api/discord/kick", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    data: {
                        bot: bot.id,
                        staff: "CONSOLE",
                        admin: "9wA7yggY0WI"
                    }
                })
            })
        }
    })

    client.login(cfg.token)

    /* DISCORD BOT END */

    app.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, () => console.log(`> Ready on http://localhost:${port}`))

})

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}