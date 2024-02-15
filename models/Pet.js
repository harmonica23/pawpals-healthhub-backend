///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose")
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const genderEnum = ["male", "female", "unknown"]
const kindEnum = ["cat", "dog", "bird", "fish", "lizard", "snake", "rabbit", "hamster", "guinea pig", "ferret", "turtle", "other"]
const spayNeutEnum = ["spayed", "neutered", "intact"]

const PetSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    birthday: {
        type: Date, 
        required: true,
    },
    kind: {
        type: String,
        enum: kindEnum,
        required: true,
    },
    gender: {
        type: String,
        enum: genderEnum,
    },
    spayNeuterStatus: {
        type: String,
        enum: spayNeutEnum,
    },
    image: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model("Pet", PetSchema);