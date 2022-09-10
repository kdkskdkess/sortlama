const md = require("marked");
const config = require("../../config.js");

export default async (req, res) => {
    var LevelRoles = require("../../schemas/LevelRoles");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }

        if(data["delete"]) {
            await LevelRoles.deleteOne({id: data.settings.role})
            return res.json({result: true});
        }

        if(await LevelRoles.findOne({id: data.settings.role})) {
            return res.json({error: 2})
        }
        new LevelRoles({id: data.settings.role, roleLevel: data.settings.image}).save()
        res.json(await LevelRoles.findOne({id: data.settings.role}))
    }
}