var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        "bundle": "./src/main.ts", 
        "polyfills": "./src/polyfills.ts"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: "ts-loader!angular2-template-loader"
            },
            {
                test: /\.html$/,
                loaders: "html-loader"
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, '../dist')
        )
    ]
};