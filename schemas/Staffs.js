const { Schema, model, models } = require("mongoose");

const staffsSchema = new Schema({
    id: String,
    tag: String,
    avatar: String,
    admin: Boolean,
    roleColor: String,
    howManyBotApproved: Number,
});

module.exports = models ? (models.Staffs || model("Staffs", staffsSchema)) : model("Staffs", staffsSchema)