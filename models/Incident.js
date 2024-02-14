///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const incidentEnum = ["injury", "illness", "diagnosis", "other"]

const IncidentSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
    },
    date: {
        type: Date, 
    },
    incidentType: {
        type: String,
        enum: incidentEnum,
    },
    description: {
        type: String,
        maxlength: 500,
    },
}, { timestamps: true });

module.exports = mongoose.model("Incident", IncidentSchema)