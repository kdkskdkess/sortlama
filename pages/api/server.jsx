const md = require("marked");
const config = require("../../config.js");

export default async (req, res) => {
    var Settings = require("../../schemas/Settings");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var b = await fetch(`https://discord.com/api/v8/guilds/${config.serverID}`, {
            method: "GET",
            headers: {
                "Authorization": "Bot " + config.token,
                "Content-Type": "application/json"
            }
        }).then(f => f.json());
        return res.json(b)
    }
}