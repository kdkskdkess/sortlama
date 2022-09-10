const md = require("marked");
const config = require("../../config.js");

function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

export default async (req, res) => {
    var Advertisements = require("../../schemas/Advertisements");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }

        if(data["delete"]) {
            await Advertisements.deleteOne({id: data.settings.id})
            return res.json({result: true});
        }
        new Advertisements({id: makeid(5), position_id: data.settings.id, image: data.settings.image}).save()
        res.json(await Advertisements.findOne({id: data.settings.id}))
    }
}