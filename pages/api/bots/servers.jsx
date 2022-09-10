const md = require("marked");
const config = require("../../../config.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    if (req.method === "POST") {
        var data = req.body;

        var botkey = await Bots.findOne({ key: data.key })
        if (!botkey) {
            return res.json({ error: 1 })
        }

        if (botkey.key !== data.key) {
            return res.json({ error: 2 })
        }

        if ((await Bots.findOne({ id: botkey.id })) === null) {
            return res.json({ error: 3 })
        }

        if (data.guilds.cache) {
            try {
                var guildTest = data.guilds.cache[Math.floor(Math.random() * data.guilds.cache.length)].members[0]
            } catch (err) {
                return res.json({ error: 4 })
            }
        } else {
            try {
                var guildTest = data.guilds[Math.floor(Math.random() * data.guilds.length)].members[0]

            } catch (err) {
                return res.json({ error: 5 })
            }
        }
        var guilds = data.guilds.cache ? data.guilds.cache.length : data.guilds.length
        await Bots.updateOne({ id: botkey.id }, { servers: guilds });
        res.json({ result: true })
    }
}