const { Schema, model, models } = require("mongoose");

const quotaSchema = new Schema({
    id: String,
    punishID: String,
    reason: String
});

module.exports = models ? (models.Punishments || model("Punishments", quotaSchema)) : model("Punishments", quotaSchema)