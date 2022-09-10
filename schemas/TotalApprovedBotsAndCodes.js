const { Schema, model, models } = require("mongoose");

const totalApprovedBotsAndCodes = new Schema({
    id: String,
    tag: String,
    bots: Number,
    codes: Number
});

module.exports = models ? (models.TotalApprovedBotsAndCodes || model("TotalApprovedBotsAndCodes", totalApprovedBotsAndCodes)) : model("TotalApprovedBotsAndCodes", totalApprovedBotsAndCodes)