let path = require('path');

module.exports = {
    entry: {
        'bundle': './ex05.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.join(__dirname, 'dest'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};