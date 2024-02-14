///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const frequencyEnum = ["once a day", "twice a day", "three times a day", "four times a day", "other"]

const DietSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
    },
    brand: {
        type: String,
        maxlength: 50,
    },
    amount: {
        type: String,
    },
    frequency: {
        type: String,
        enum: frequencyEnum,
    },
    feedingNotes: {
        type: String,
        maxlength: 100,
    },
    weight: {
        type: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model("Diet", DietSchema)