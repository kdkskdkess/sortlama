const md = require("marked");
const config = require("../../../config.js");
var sendLog = require("../../../sendLog.js");

export default async (req, res) => {
    var Codes = require("../../../schemas/Codes");
    var User = require("../../../schemas/User");
    var Punishments = require("../../../schemas/Punishments");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var edit = data.edit;
        data = data.data;
        var punishments = JSON.stringify(await Punishments.find({id: data.developer.id}))
        var userPunishments = JSON.parse(punishments).map(p => p.punishID)
        if(userPunishments.includes("2")) {
            return res.json({error: 4})
        }
        if(!edit) {
            if (await Codes.findOne({ name: data.codename })) {
                return res.json({ error: 2 })
            }
        }
        var member = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${data.developer.id}`, {
            method: "GET",
            headers: {
                "Authorization": "Bot " + config.token,
                "Content-Type": "application/json"
            }
        }).then(f => f.json());
        
        if (!member) {
            return res.json({ error: 3 })
        }

        var publisherRoles = req.body.publisherRoles.map((r) => { return r })
        var memberRoles = [];
        for (let obj of publisherRoles) {
            if (member.roles.includes(obj)) {
                memberRoles.push(obj)
            }
        }

        if (memberRoles.length < 1) {
            return res.json({ error: 5 })
        }

        if(edit) {
            await Codes.updateOne({name: data.codename}, { name: data.codename, desc: data.codedesc, library: data.codelibrary, code: data.code, codeBotJS: (data.codeMain ? data.codeMain : ""), categories: data.codecategories, developer: member.user }, {upsert: true})
        } else {
            new Codes({ name: data.codename, desc: data.codedesc, library: data.codelibrary, code: data.code, codeBotJS: (data.codeMain ? data.codeMain : ""), categories: data.codecategories, developer: member.user, waiting: true }).save()
        }

        var u = await User.findOne({id: member.user.id})
        var object = u ? (u.howManyCodeAdded ? u.howManyCodeAdded : {}) : {}
        var categories = data.codecategories.reduce((a, key) => Object.assign(a, { [key]: ((object[key] || 0) + 1) }), {})
        await User.updateOne({id: member.user.id}, { howManyCodeAdded: categories, tag: `${member.user.username}#${member.user.discriminator}` }, {upsert: true})

        sendLog(`<@${member.user.id}> ${edit ? "edited" : "added"} a code with named **${data.codename}**.`)
        res.json({ result: (await Codes.findOne({ name: data.codename })) })
    }
}