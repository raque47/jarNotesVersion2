router.get('/', (req, res) =>{
    //res.send("Hello World!");
    res.json({  //No se puede hacer .json y .send simultaneamente porque por debajo estos implementan un res.send para no dejar el server guindando
        'id': '89kjn',
        name: 'xxx'
    });
});