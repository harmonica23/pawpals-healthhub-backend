///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const VaxSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
    },
    name: {
        type: String, 
        required: true,
    },
    dateGiven: {
        type: Date,
        required: true,
    },
    nextDue: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model("Vax", VaxSchema)