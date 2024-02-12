///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const frequencyEnum = ["once a day", "twice a day", "three times a day", "four times a day", "other"]

const MedSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
    },
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