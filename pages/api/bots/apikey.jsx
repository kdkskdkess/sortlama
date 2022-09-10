const md = require("marked");
const config = require("../../../config.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    if (req.method === "POST") {
        var data = req.body;

        var botkey = await Bots.findOne({ id: data.bot }).then(x => x.key)
        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        if (!botkey) {
            var key = makeid(31);
            await Bots.updateOne({ id: data.bot }, { key: key })
            return res.json({ result: key })
        } else {
            return res.json({ result: botkey })
        }
    }
}