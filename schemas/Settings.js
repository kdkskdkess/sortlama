const { Schema, model, models } = require("mongoose");

const siteSettings = new Schema({
    id: String,
    botAdd: Boolean,
    regularlyBotApprove: Boolean,
    codeAdd: Boolean,
    regularlyCodeApprove: Boolean
});

module.exports = models ? (models.Settings || model("Settings", siteSettings)) : model("Settings", siteSettings)