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
        if(bot.certificate) {
            await Bots.updateOne({ id: bot.id }, { certificate: false })
            sendLog(`Bot <@${bot.id}>'s certificate has been removed.`)
        } else {
            await Bots.updateOne({ id: bot.id }, { certificate: true })
            sendLog(`Bot <@${bot.id}> has been certificated.`)
        }
        res.json({ result: true })
    }
}