const md = require("marked");
const config = require("../../../config.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    var Votes = require("../../../schemas/Votes");

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
        if (!data.user) {
            return res.json({ error: 4 })
        }
        res.json({ result: (await Votes.findOne({ user: data["user"], bot: botkey.id }) ? true : false) })
    }
}