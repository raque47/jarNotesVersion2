const path = require('path')

module.exports = {
    context: __dirname,
    entry: 'js/ClientApp.js',
    devtool: 'eva;',
    output:{
        path: path.join(),
        filename: 'bundle.js' 
    },
    resolve: {
        extension: ['.js', 'json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true  //para partir el codigo en diferentes files y no solo uno
    },
    module: {
        rules: [
            {
                enforce: 'pre', //preloader
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/

            },
            {
                // exclude: /node_modules/, // no corra nodemodules por babel
                // include: path resolve(__dirname, 'js'),
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                 test: /\.css$/,
                 use:[
                     'style-loader', //inject your style in your bundle css pega los archovs al html y lo lee de izquierda a derecha 

                     {
                        "loader": 'css-loader', 
                        option: {
                         url:'false'    
                        }// hacer que pueda importar y reocnocer los archivos .css
                     }
                 ]
            }
        ]
    },

        // sas loader
        // css loader

}