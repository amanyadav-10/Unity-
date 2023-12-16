const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: [true, "username not available"],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email already registered"],
    },
    password: {
        type: String,
        required: true,
    },
    usertype: {
        type: String,
        enum: ['buyer', 'seller'],
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;