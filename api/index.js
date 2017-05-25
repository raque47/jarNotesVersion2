const express=require("express");

const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

var app = express();


const routes = require('./')



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

app.listen(port, ()=>{
    console.log(`Express listening on port ${port}`);
}); //Lleva 2 parametros, el primer parametro es el puerto donde correra el server y el segundo es el callback








module.exports =app;


//Para hacer watch sobre el index: nodemon 


/* dotenv para definir las variables de ambiente


.env archivo nuevo

NODE_ENV
DB = mongodb://localhost/Elbrete

dentro de api  start.jsx

con 


carpeta router dentro un index con

app.get('/', (req, res) =>{
    //res.send("Hello World!");
    res.json({  //No se puede hacer .json y .send simultaneamente porque por debajo estos implementan un res.send para no dejar el server guindando
        'id': '89kjn',
        name: 'xxx'
    });
}); //Tiene 2 parametros de objeto: request y response. Con esto ya se esta escuchando a una ruta

app.get('/bretes', (req, res) =>{
    res.json({  //No se puede hacer .json y .send simultaneamente porque por debajo estos implementan un res.send para no dejar el server guindando
       "name": "brete1"  
    });
}); 

y ahi pongo todo lo de la base de datos


Antes se manejaba con callback hell  pero ahora hay una implementacion nativa de node 
sobrescribiendo el objeto de mogose 


promise library pero mejro usar las nativas porque itenen mas soporte
moongose.Pormise =


para definir el modelo necesito mooongose

dentro de modelo un Brete.js

definir un esquema antes de definir el modelo


const notesSchema =new moongose.Schema () {todos los atributo del json}


module.exports = mongoose.model('Stores', breteSchema);

 */