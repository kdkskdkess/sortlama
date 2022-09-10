const { Schema, model, models } = require("mongoose");

const adSchema = new Schema({
    id: String,
    position_id: Number,
    image: String
});

module.exports = models ? (models.Advertisements || model("Advertisements", adSchema)) : model("Advertisements", adSchema)