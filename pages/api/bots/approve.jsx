const axios = require("axios");
var config = require("../../../config.js");
var sendLog = require("../../../sendLog.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    var TotalApprovedBotsAndCodes = require("../../../schemas/TotalApprovedBotsAndCodes");
    var Staffs = require("../../../schemas/Staffs");
    var Settings = require("../../../schemas/Settings");
    var settings = (await Settings.findOne({id: 1})) ? await Settings.findOne({id: 1}) : {};
    if (req.method === "POST") {
        var data = req.body;
        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var bot = (await Bots.findOne({ id: data.bot }));
        if (!bot) {
            return res.json({ error: 2 })
        }
        if (data.botIndex !== 0) {
            if(settings.regularlyBotApprove) {
                return res.json({ error: 3 })
            }
        }
            await Bots.updateOne({ id: data.bot },
                {
                    waiting: false
                });
        bot.developers.map(async(el) => {
            await axios(`${config.siteURL}/api/discord/role`, {
                method: "POST",
                data: {
                    admin: "9wA7yggY0WI",
                    role: "give",
                    user: el.id
                },
                headers: {
                    "Authorization": "Bot " + config.token,
                    "Content-Type": "application/json"
                }
            })
        })
        await TotalApprovedBotsAndCodes.updateOne({ id: data.staff }, { $inc: { bots: 1 } }, {upsert: true})
        sendLog(`Bot <@${data.bot}> has approved by <@${data.staff}>.`)
        res.json({ result: (await Bots.findOne({ id: data.bot })) })
    }
}