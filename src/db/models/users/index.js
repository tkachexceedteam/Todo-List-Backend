const mongoose = require("mongoose");

const { Schema }  = mongoose;

const usersSchema = new Schema({
    login: String,
    password: Boolean,
});

module.exports = User = mongoose.model("events", usersSchema);
