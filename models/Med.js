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
    },
    dateStart: {
        type: Date,
    },
    dateEnd: {
        type: Date,
    },
    dose: {
        type: String,
    },
    frequency: {
        type: String,
        enum: frequencyEnum,
    },
}, { timestamps: true });

module.exports = mongoose.model("Med", MedSchema)