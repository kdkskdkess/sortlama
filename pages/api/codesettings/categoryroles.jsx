const md = require("marked");
const config = require("../../../config.js");

export default async (req, res) => {
    var CategoryRoles = require("../../../schemas/CategoryRoles");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }

        var data2 = await (CategoryRoles.findOne({id: data.data.role}));

        if(data["delete"]) {

            if(data2) {
                await CategoryRoles.deleteOne({id: data.data.role, category: data.data.category});
            }

            return res.json({result: true});
        }

        if(data2 && data2.category === data.data.category) {
            return res.json({error: 2})
        }

        new CategoryRoles({id: data.data.role, category: data.data.category }).save();


        return res.json(await (CategoryRoles.findOne({id: data.data.role})))
    }
}