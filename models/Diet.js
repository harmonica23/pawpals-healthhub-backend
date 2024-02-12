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
    weight: {
        type: Number,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("Diet", DietSchema)