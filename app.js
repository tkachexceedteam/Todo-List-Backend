const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb+srv://admin:admin@cluster0.twjzz.mongodb.net/Database0?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

const apiRoutes = require("./src/modules/routes/routes");


app.use(cors());

app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});