const { Schema, model, models } = require("mongoose");

const codeSettingsSchema = new Schema({
    id: Number,
    staffRoles: Array,
    publisherRoles: Array,
    categories: Array,
    categoryRoles: Array
});

module.exports = models ? (models.codeSettingsSchema || model("CodeSettings", codeSettingsSchema)) : model("CodeSettings", codeSettingsSchema)