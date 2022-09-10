const md = require("marked");
const axios = require("axios");
var BotsTotalKickBan = require("../../../schemas/BotsTotalKickBan");
var cfg = require("../../../config.js");

export default async (req, res) => {
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
            await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/bans/${data.bot}`, {
                method: "PUT",
                body: JSON.stringify({
                    reason: `Banned by this user: ${data.staff} (user's ID)`
                }),
                headers: {
                    "Authorization": "Bot " + cfg.token,
                    "Content-Type": "application/json"
                }
            })
        await BotsTotalKickBan.updateOne({id: "ban"}, { $inc: { bans: 1 } }, {upsert: true})
        return res.json({result: true})
    }
}