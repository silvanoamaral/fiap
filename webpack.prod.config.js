const path    = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '/src/index.js'),
    output: {        
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,                
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