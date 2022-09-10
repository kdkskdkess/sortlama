const md = require("marked");
const cfg = require('../../../config.js');

export default async (req, res) => {
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        if(data.role === "give") {
            await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${data.user}/roles/${cfg.botDeveloperRole}`, {
                method: "PUT",
                headers: {
                    "Authorization": "Bot " + cfg.token,
                    "Content-Type": "application/json"
                }
            })
        } else {
            await fetch(`https://discord.com/api/v8/guilds/${cfg.serverID}/members/${data.user}/roles/${cfg.botDeveloperRole}`, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bot " + cfg.token,
                    "Content-Type": "application/json"
                }
            })
        }
        return res.json({result: true})
    }
}