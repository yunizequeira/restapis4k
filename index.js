const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://yunizequeira:a8CQW4ptO0SNxYaE@cluster0.akezl5e.mongodb.net/easyfiesta?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

const app = express();

// para usar el router antes definido
app.use('/', routes());

app.listen(5000)