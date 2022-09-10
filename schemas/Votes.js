const { Schema, model, models } = require("mongoose");

const userVotesSchema = new Schema({
    bot: String,
    user: String,
    votedAt: Number
});

module.exports = models ? (models.Votes || model("Votes", userVotesSchema)) : model("Votes", userVotesSchema)