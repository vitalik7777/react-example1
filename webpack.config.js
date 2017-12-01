const path  = require('path')
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: __dirname + "/public/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
};