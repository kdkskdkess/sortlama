const axios = require("axios");
var config = require("../../../config.js");
var sendLog = require("../../../sendLog.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
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
        if(data.staff !== "CONSOLE") {
            if(data.botIndex) {
                if(data.botIndex !== 0) {
                    if(settings.regularlyBotApprove) {
                        return res.json({ error: 3 })
                    }
                }
            }
        }
        await Bots.deleteOne({ id: data.bot });
        bot.developers.map(async(el) => {
            var userBots = await Bots.find({ "developers": { $elemMatch: { "id": el.id } } });
            if(userBots.length === 0) {
                await axios(`${config.siteURL}/api/discord/role`, {
                    method: "POST",
                    data: {
                        admin: "9wA7yggY0WI",
                        role: "take",
                        user: el.id
                    }
                })
            }
        })
        sendLog(`Bot <@${data.bot}> has been ${data.staff ? `declined/deleted by <@${data.staff}>` : "deleted by bot owner."}`)
        res.json({ result: true })
    }
}