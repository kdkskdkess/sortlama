const { Schema, model, models } = require("mongoose");

const categoryRolesSchema = new Schema({
    id: String,
    category: String
});

module.exports = models ? (models.categoryRolesSchema || model("CategoryRoles", categoryRolesSchema)) : model("CategoryRoles", categoryRolesSchema)