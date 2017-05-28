
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.connect(process.env.DB);

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + process.env.DB);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Express listening on port 3000');
}); //Lleva 2 parametros, el primer parametro es el puerto donde correra el server y el segundo es el callback

