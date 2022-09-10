const { Schema, model, models } = require("mongoose");

const levelRolesSchema = new Schema({
    id: String,
    roleLevel: String
});

module.exports = models ? (models.LevelRoles || model("LevelRoles", levelRolesSchema)) : model("LevelRoles", levelRolesSchema)