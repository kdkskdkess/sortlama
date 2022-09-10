const md = require("marked");
const config = require("../../../config.js");
var sendLog = require("../../../sendLog.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    var Votes = require("../../../schemas/Votes");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var bot = await Bots.findOne({ id: data.bot });
        if (!bot) {
            return res.json({ error: 2 })
        }
        if(bot.specialURL) {
            await Bots.updateOne({ id: bot.id }, { specialURL: null })
            sendLog(`Bot <@${data.bot}>'s special url has taken by <@${data.staff}>`)
        } else {
            await Bots.updateOne({ id: bot.id }, { specialURL: bot.bot.name.toLowerCase().split(" ").join("-") })
            sendLog(`<@${data.staff}> gave special URL to bot <@${data.bot}>`)
        }
        res.json({ result: true })
    }
}