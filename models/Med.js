///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const frequencyEnum = ["Once a day", "Twice a day", "Three times a day", "Four times a day", "Other"]

const MedSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    dateStart: {
        type: Date,
        required: true,
    },
    dateEnd: {
        type: Date,
        required: false,
    },
    dose: {
        type: String,
        required: false,
    },
    frequency: {
        type: String,
        enum: frequencyEnum,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("Med", MedSchema)