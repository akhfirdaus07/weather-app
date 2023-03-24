const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
};