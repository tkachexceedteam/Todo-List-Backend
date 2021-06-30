const mongoose = require("mongoose");

const { Schema }  = mongoose;

const taskSchema = new Schema({
    text: String,
    isCheck: Boolean,
    backgroundColor: String
});

module.exports = Task = mongoose.model("tasks", taskSchema);
