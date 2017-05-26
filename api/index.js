const express=require("express");
var app = express();
const routes = require('./routes/');

app.use('api', routes); //Se utiliza para el localhost

module.exports =app;



