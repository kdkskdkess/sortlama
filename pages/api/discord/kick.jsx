const md = require("marked");
const cfg = require('../../../config.js');
const axios = require("axios");
var BotsTotalKickBan = require("../../../schemas/BotsTotalKickBan");

export default async (req, res) => {
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${data.bot}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bot " + cfg.token,
                "Content-Type": "application/json"
            }
        })
        await BotsTotalKickBan.updateOne({id: "kick"}, { $inc: { kicks: 1 } }, {upsert: true})
        return res.json({result: true})
    }
}