const md = require("marked");
const config = require("../../../config.js");
var sendLog = require("../../../sendLog.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    var Punishments = require("../../../schemas/Punishments");
    var BotAddQuota = require("../../../schemas/BotAddQuota");
    var quotas = await BotAddQuota.find({});
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var edit = data.edit;
        data = data.data;
        var punishments = JSON.stringify(await Punishments.find({id: data.botowner.id}))
        var userPunishments = JSON.parse(punishments).map(p => p.punishID)
        if(userPunishments.includes("1")) {
            return res.json({error: 7})
        }
        if(!edit) {
            if (await Bots.findOne({ id: data.botid })) {
                return res.json({ error: 2 })
            }
        }
        var member = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${data.botowner.id}`, {
            method: "GET",
            headers: {
                "Authorization": "Bot " + config.token,
                "Content-Type": "application/json"
            }
        }).then(f => f.json());
        
        if (!member) {
            return res.json({ error: 5 })
        }
        var user = member;
        var quotaRoles = quotas.map((quota) => { return { role: quota.id, number: quota.quota } })
        var userRoles = [];
        for (let obj of quotaRoles) {
            if (user.roles.includes(obj.role)) {
                userRoles.push(obj)
            }
        }
        var userBots = await Bots.find({ "developers": { $elemMatch: { "id": data.botowner.id } } });
        /*
        if (userRoles.length < 1) {
            return res.json({ error: 6 })
        } else {
            if (userRoles[userRoles.length - 1].number <= userBots.length) {
                return res.json({ error: 6 })
            }
        }
        */
        var b = await fetch(`https://discord.com/api/v8/users/${data.botid}`, {
            method: "GET",
            headers: {
                "Authorization": "Bot " + config.token,
                "Content-Type": "application/json"
            }
        }).then(f => f.json());
        if (!b.username) {
            return res.json({ error: 3 })
        }
        if (!b.bot) {
            return res.json({ error: 4 })
        }
        var developers = [];
        data.botdevelopers.map(async (dev) => {
            var d = await fetch(`https://discord.com/api/v8/users/${dev}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bot " + config.token,
                    "Content-Type": "application/json"
                }
            }).then(f => f.json());
            if (!d.username) return;

            developers.push({
                avatar: d.avatar ? `https://cdn.discordapp.com/avatars/${d.id}/${d.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
                tag: `${d.username}#${d.discriminator}`,
                id: d.id
            })
            if(edit) {
                await Bots.updateOne({ id: data.botid },
                {
                    prefix: data.botprefix,
                    support: data.botsupport,
                    github: data.botgithub,
                    library: data.botlibrary,
                    shortDesc: data.botshortDesc,
                    desc: md(data.botdesc),
                    developers: developers,
                    owner: {
                        avatar: data.botowner.avatar ? `https://cdn.discordapp.com/avatars/${data.botowner.id}/${data.botowner.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
                        tag: `${data.botowner.username}#${data.botowner.discriminator}`,
                        id: data.botowner.id
                    },
                    bot: {
                        name: b.username,
                        avatar: b.avatar,
                        id: b.id
                    },
                    tags: data.bottags,
                },
                { upsert: true });
            } else {
            await Bots.updateOne({ id: data.botid },
                {
                    prefix: data.botprefix,
                    support: data.botsupport,
                    github: data.botgithub,
                    library: data.botlibrary,
                    shortDesc: data.botshortDesc,
                    desc: md(data.botdesc),
                    developers: developers,
                    owner: {
                        avatar: data.botowner.avatar ? `https://cdn.discordapp.com/avatars/${data.botowner.id}/${data.botowner.avatar}.webp?size=1024` : `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`,
                        tag: `${data.botowner.username}#${data.botowner.discriminator}`,
                        id: data.botowner.id
                    },
                    bot: {
                        name: b.username,
                        avatar: b.avatar,
                        id: b.id
                    },
                    tags: data.bottags,
                    waiting: true
                },
                { upsert: true });
            }
        })
        sendLog(`<@${data.botid}> added by ${data.botdevelopers.map((dev) => `<@${dev}>`).join(", ")}.`)
        res.json({ result: (await Bots.findOne({ id: data.botid })) })
    }
}