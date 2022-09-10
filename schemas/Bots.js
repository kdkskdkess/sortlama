const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const botsSchema = new Schema({
    id: String,
    certificate: Boolean,
    prefix: String,
    shortDesc: String,
    github: String,
    library: String,
    support: String,
    desc: String,
    votes: Number,
    servers: Number,
    bot: Object,
    owner: Object,
    developers: Array,
    tags: Array,
    key: String,
    waiting: Boolean,
    specialURL: String
});

botsSchema.plugin(mongoosePaginate);

module.exports = models ? (models.Bots || model("Bots", botsSchema)) : model("Bots", botsSchema)