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
    },
    dateGiven: {
        type: Date,
    },
    nextDue: {
        type: Date,
    },
}, { timestamps: true });

module.exports = mongoose.model("Vax", VaxSchema)