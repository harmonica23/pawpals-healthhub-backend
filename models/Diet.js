///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const frequencyEnum = ["Once a day", "Twice a day", "Three times a day", "Four times a day", "Other"]

const DietSchema = new Schema({
    brand: {
        type: String,
        required: true,
        maxlength: 50,
    },
    cups: {
        type: Number,
        required: true,
    },
    frequency: {
        type: String,
        enum: frequencyEnum,
        required: true,
    },
    feedingNotes: {
        type: String,
        required: false,
        maxlength: 100,
    },
    petWeightLbs: {
        type: Number,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("Diet", DietSchema)