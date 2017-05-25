const express=require("express");
var app = express();
const routes = require('./routes/');

app.use('api', routes);

module.exports =app;



