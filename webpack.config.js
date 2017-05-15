const path = require('path')

module.exports = {
    context: __dirname,
    entry: './js/App.js',
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js', '.json']
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
                include: path.resolve(__dirname, 'js'), //Se transforman los .js de ES6 a ES5
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                 test: [/\.scss$/, /\.css$/], 
                 use: [
                    'style-loader', //Se inyectan todos los archivos .scss y .css en el html de izquierda a derecha
                    'css-loader?importLoaders=2',
                    'sass-loader', //Hace que los .scss y .css sean documentos reconocibles y puedan ser importados
                 ]
            }
        ]
    }
}