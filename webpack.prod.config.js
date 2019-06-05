const path    = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                exclude: /node_modules/,
                test: /\.(s*)css$/,
                loader:['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            sourceMap: true
        })],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template:path.join(__dirname, '/public/index.html')
        })
    ]
}