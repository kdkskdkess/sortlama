const axios = require("axios");
var config = require("../../../config.js");
var sendLog = require("../../../sendLog.js");

export default async (req, res) => {
    var Codes = require("../../../schemas/Codes");
    var Settings = require("../../../schemas/Settings");
    var CodeSettings = require("../../../schemas/CodeSettings");
    var settings = (await Settings.findOne({id: 1})) ? await Settings.findOne({id: 1}) : {};
    var codeSettings = (await CodeSettings.findOne({id: 1})) ? (await CodeSettings.findOne({id: 1})) : {};
    if (req.method === "POST") {
        var data = req.body;
        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var code = (await Codes.findOne({ name: data.code.name }));

        if(data.staff !== "CONSOLE") {
            if(data.codeIndex) {
                if(data.codeIndex !== 0) {
                    if(settings.regularlyCodeApprove) {
                        return res.json({ error: 3 })
                    }
                }
            }

            var staff = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}/members/${data.staff}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bot " + config.token,
                    "Content-Type": "application/json"
                }
            }).then(f => f.json());
            if(!staff) return res.json({error: 4})

            if(codeSettings.staffRoles) {
                if(codeSettings.staffRoles.some(r=> staff.roles.includes(r)) === false) {
                    return res.json({error: 5})
                }
            }
        }
        await Codes.deleteOne({ name: data.code.name });

        sendLog(`Code "**${data.code.name}**" has been ${data.staff ? `declined/deleted by <@${data.staff}>` : "deleted by code developer."}`)
        res.json({ result: true })
    }
}