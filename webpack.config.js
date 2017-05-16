const path = require('path')
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const precss = require('precss');
//const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, '/src'),
    entry: {
        javascript: './app.jsx',
    },
    devtool: 'eval',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                enforce: 'pre', //preloader
                test: [/\.js$/, /\.jsx$/],
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
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