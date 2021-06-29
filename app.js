const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
//
// const taskSchema = new Schema({
//   text : String,
//   isCheck: Boolean
// });
//
const uri = "mongodb+srv://admin:admin@cluster0.twjzz.mongodb.net/Database0?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

// const Task = mongoose.model("tasks", taskSchema);

// app.get("/", (req, res) => {
//   const task = new Task({
//     text: "Second task",
//     isCheck: false
//   });
//   task.save().then(result => {
//     res.send(result);
//   })
// })

// app.get('/paramRequest', (req, res) => {
//   Task.find().then(result => {
//     res.send({data: result});
//   })
// });

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());

app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});