const md = require("marked");
const config = require("../../config.js");

export default async (req, res) => {
    var Settings = require("../../schemas/Settings");
    var User = require("../../schemas/User");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        if(data["userSettings"]) {
            await User.updateOne({id: data["user"]}, data.settings, {upsert: true})
            res.json({settings: await User.findOne({id: data["user"]})})
        } else {
            await Settings.updateOne({id: 1}, data.settings, {upsert: true})
            res.json({settings: await Settings.findOne({id: 1})})
        }
    }
}