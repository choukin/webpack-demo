const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
   mode:'development',
    entry: {
      app:['./src/index.js',hotMiddlewareScript],
      // print:'./src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module:{
      rules: [
        {
          test: /\.css$/,
          use:['style-loader', 'css-loader']
        }
      ]
    },
    plugins:[
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title:'Hot Module Replacement'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
    output:{
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}