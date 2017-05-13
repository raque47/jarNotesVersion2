const path = require('path')

module.exports ={
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
        chunks: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },

        // sas loader
        // css loader

}