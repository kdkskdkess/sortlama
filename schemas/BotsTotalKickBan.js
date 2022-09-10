const { Schema, model, models } = require("mongoose");

const botsTotalKickBan = new Schema({
    id: String,
    bans: Number,
    kicks: Number
});

module.exports = models ? (models.BotsTotalKickBan || model("BotsTotalKickBan", botsTotalKickBan)) : model("BotsTotalKickBan", botsTotalKickBan)