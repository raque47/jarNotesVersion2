const express=require("express");
const port = 4000;

var app = express();

app.get('/', (req, res) =>{
    res.send("Hello World!");
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

app.listen(port, ()=>{
    console.log(`Express listening on port ${port}`);
}); //Lleva 2 parametros, el primer parametro es el puerto donde correra el server y el segundo es el callback

//Para hacer watch sobre el index: nodemon 
