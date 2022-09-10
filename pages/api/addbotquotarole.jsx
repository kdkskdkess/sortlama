const md = require("marked");
const config = require("../../config.js");

export default async (req, res) => {
    var BotAddQuota = require("../../schemas/BotAddQuota");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }

        if(data["delete"]) {
            await BotAddQuota.deleteOne({id: data.settings.role})
            return res.json({result: true});
        }

        if(await BotAddQuota.findOne({id: data.settings.role})) {
            return res.json({error: 2})
        }
        new BotAddQuota({id: data.settings.role, quota: data.settings.number}).save()
        res.json(await BotAddQuota.findOne({id: data.settings.role}))
    }
}