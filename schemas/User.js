const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
    id: String,
    tag: String,
    biography: String,
    twitter: String,
    instagram: String,
    website: String,
    github: String,
    youtube: String,
    howManyCodeAdded: Object,
});

module.exports = models ? (models.User || model("User", userSchema)) : model("User", userSchema)