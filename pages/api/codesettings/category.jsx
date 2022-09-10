const md = require("marked");
const config = require("../../../config.js");

export default async (req, res) => {
    var CodeSettings = require("../../../schemas/CodeSettings");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }

        var data2 = await (CodeSettings.findOne({id: 1}));

        if(data["delete"]) {

            if(data2) {
                await CodeSettings.updateOne({id: 1}, { $pull: { categories: data.category } }, {upsert:true});
            }

            return res.json({result: true});
        }

        if(data2 && data2.categories && data2.categories.includes(data.id)) {
            return res.json({error: 2})
        }

        await CodeSettings.updateOne({id: 1}, { $push: { categories: data.category } }, {upsert:true});


        return res.json(await (CodeSettings.findOne({})))
    }
}