///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const visitTypeEnum = ["Healthy", "Injury", "Illness", "Treatment", "Recheck", "Procedure", "Other"]

const VetConsultSchema = new Schema({
    date: {
        type: Date, 
        required: true,
    },
    visitType: {
        type: String,
        enum: visitTypeEnum,
    },
    description: {
        type: String,
        maxlength: 1000,
    },
}, { timestamps: true });

module.exports = mongoose.model("VetConsult", VetConsultSchema)