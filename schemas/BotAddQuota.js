const { Schema, model, models } = require("mongoose");

const quotaSchema = new Schema({
    id: String,
    quota: String
});

module.exports = models ? (models.BotAddQuota || model("BotAddQuota", quotaSchema)) : model("BotAddQuota", quotaSchema)