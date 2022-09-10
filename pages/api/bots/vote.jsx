const md = require("marked");
const config = require("../../../config.js");

export default async (req, res) => {
    var Bots = require("../../../schemas/Bots");
    var Votes = require("../../../schemas/Votes");
    if (req.method === "POST") {
        var data = req.body;

        if (data["admin"] !== "9wA7yggY0WI") {
            return res.json({ error: 1 })
        }
        var bot = await Bots.findOne({ id: data.bot });
        if (!bot) {
            return res.json({ error: 2 })
        }
        var vote = await Votes.findOne({bot: bot.id, user: data["user"]})
        if(vote) {
            if(Date.now() >= (vote.votedAt + 43200000)) {
                await Votes.deleteOne({bot: bot.id, user: data["user"]})
            } else {
                return res.json({error: 3})
            }
        }
        await Bots.updateOne({ id: bot.id }, { $inc: { votes: 1 } })
        new Votes({ bot: bot.id, user: data["user"], votedAt: Date.now() }).save()
        res.json({ result: true })
    }
}