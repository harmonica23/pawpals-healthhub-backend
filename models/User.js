///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require("mongoose");
const Schema = mongoose.Schema
///////////////////////////////
// MODELS
////////////////////////////////
const UserSchema = new Schema({
    userName: {
        type: String, 
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passwordDigest: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema)