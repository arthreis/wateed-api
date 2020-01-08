const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const DOCKER = 'mongodb://0.0.0.0/mongo-wateed';
const LOCAL = 'mongodb://localhost:27017/mongo-wateed';

mongoose.connect(DOCKER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);