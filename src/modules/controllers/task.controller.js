const tasks = [];

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    text : String,
    isCheck: Boolean
});
const uri = "mongodb+srv://admin:admin@cluster0.twjzz.mongodb.net/Database0?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const Task = mongoose.model("tasks", taskSchema);


module.exports.getAllTasks = async (req, res, next) => {
    Task.find().then(result => {
        res.send({data: result});
    })
};

module.exports.createNewTask = (req, res, next) => {

    const body = req.body;
    if (body.hasOwnProperty('text') && body.hasOwnProperty('isCheck')) {
        const task = new Task({
            text: body.text,
            isCheck: false
        });
        task.save().then(result => {
            res.send(result);
        })
    } else {
        res.status(422).send('Error! Params not correct');
    }
};

module.exports.changeTaskInfo = async (req, res, next) => {
    const body = req.body;
    console.log(body);
    if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
        Task.findOneAndUpdate({_id: body._id}, {text: body.text, isCheck: body.isCheck}).then();
    } else {
        res.status(422).send('Error! Params not correct');
    }
};

module.exports.deleteTask = async (req, res, next) => {
    if (!req.query._id) {
        return res.status(422).send('Error! Params not correct');
    } else {
        Task.findOneAndRemove({_id: req.query._id}).then(result => {
            res.send({data: result});
        })
    }
};