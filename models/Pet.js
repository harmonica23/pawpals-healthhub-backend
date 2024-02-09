///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose")
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const genderEnum = ["Male", "Female", "Unknown"]
const kindEnum = ["Cat", "Dog", "Bird", "Fish", "Lizard", "Snake", "Rabbit", "Hamster", "Guinea Pig", "Ferret", "Turtle", "Other"]
const spayNeutEnum = ["Spayed", "Neutered", "Intact"]

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
        emum: kindEnum,
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