const express = require('express');
const routes = require('./routes');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://yunizequeira:a8CQW4ptO0SNxYaE@cluster0.akezl5e.mongodb.net/easyfiesta?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

const app = express();
app.use(cors());

// Servidor HTTP
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () => console.info(`Notes App running at http://${process.env.IP}:${process.env.HTTP_PORT}`));

// para usar el router antes definido
app.use('/', routes());

// app.listen(5000)