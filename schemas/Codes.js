const { Schema, model, models } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const codeSchema = new Schema({
    name: String,
    desc: String,
    code: String,
    codeBotJS: String,
    library: String,
    developer: Object,
    categories: Array,
    waiting: Boolean
});

codeSchema.plugin(mongoosePaginate);

module.exports = models ? (models.Codes || model("Codes", codeSchema)) : model("Codes", codeSchema)