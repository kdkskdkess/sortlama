const axios = require("axios");
var config = require("../../config.js");
var sendLog = require("../../sendLog.js");

export default async (req, res) => {
    var Punishments = require("../../schemas/Punishments");
    var Settings = require("../../schemas/Settings");
    var settings = (await Settings.findOne({id: 1})) ? await Settings.findOne({id: 1}) : {};
    if (req.method === "POST") {
        var data = req.body.data;

        if (req.body["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }

        if(await Punishments.findOne({punishID: data.punish, id: data.id})) {
            return res.json({error: 2})
        }


        if(req.body["delete"] === true) {
            await Punishments.deleteOne({ punishID: data.punishID, id: data.id });
            sendLog(`<@${data.id}>'s punish has been removed by <@${req.body.staff}>.`)
        } else {
            new Punishments({ punishID: data.punish, id: data.id, reason: data.reason }).save()
            sendLog(`<@${data.id}> has been punished by <@${req.body.staff}>. Punish type: ${data.punishType}. Reason: ${data.reason}`)
        }

        res.json({ result: true })
    }
}