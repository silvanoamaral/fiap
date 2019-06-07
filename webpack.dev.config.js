var path    = require('path')
var HtmlWebpackPlugin     = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'bundle.js',
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
  plugins:[
    new HtmlWebpackPlugin ({
      template:path.join(__dirname, '/public/index.html')
    })
  ]
}
