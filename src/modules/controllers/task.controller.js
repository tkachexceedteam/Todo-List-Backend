const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    text: String,
    isCheck: false
});

const Task = mongoose.model("tasks", taskSchema);


module.exports.getAllTasks = async (req, res, next) => {
    try {
        const result = await Task.find()
        res.json(result)
    }
    catch(err) {
        res.status(422).json(err.message);
    }

};

module.exports.createNewTask = async (req, res, next) => {
    const {text} = req.body;
    try {
        const task = new Task({
            text: text
        });
        const result = await task.save()
        res.json(result)
    } catch (err) {
        res.status(422).json(err.message);
    }
};

module.exports.changeTaskInfo = async (req, res, next) => {
    const body = req.body;
    console.log(body);
    if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
        Task.findOneAndUpdate({_id: body._id}, {text: body.text, isCheck: body.isCheck}).then();
        res.json()
    } else {
        res.status(422).send('Error! Params not correct');
    }
};

module.exports.deleteTask = async (req, res, next) => {
    try {
        Task.findOneAndRemove({_id: req.query._id}).then(result => {
            res.status(200).send('')
        });
    }
    catch (err) {
        err.status(422).send('Error! Params not correct');
    }
};