///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const incidentEnum = ["Injury", "Illness", "Diagnosis", "Other"]

const IncidentSchema = new Schema({
    date: {
        type: Date, 
        required: true,
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