const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: {
        index: './src/index.js',
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'Caching'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    output:{
        filename:'[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
          {
            test: /\.css$/,
            use:['style-loader', 'css-loader']
          }
        ]
      },
      optimization:{
          runtimeChunk: 'single',
          splitChunks: {
              cacheGroups: {
                  vendor: {
                      test: /[\\/]node_modules[\\/]/,
                      name:'vendors',
                      chunks: 'all'
                  }
              }
          }
      }
}