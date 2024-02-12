///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const visitTypeEnum = ["healthy", "injury", "illness", "treatment", "recheck", "procedure", "other"]

const VetConsultSchema = new Schema({
    pet: {
        type: Schema.Types.ObjectId,
        ref: "Pet",
    },
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