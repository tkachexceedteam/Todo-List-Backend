const mongoose = require("mongoose");

const { Schema }  = mongoose;

const eventSchema = new Schema({
    name: String,
    doctor: String,
    date: String,
    issues: String
});

module.exports = Events = mongoose.model("events", eventSchema);
