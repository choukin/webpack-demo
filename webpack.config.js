const path = require('path')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
      rules:[
       { 
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            // 'file-loader',
            { 
              loader: 'url-loader',
              options:{
                limit: 8192,
                name: '[name].[hash:7].[ext]'
              }
            }, 
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                }
              }              
            }       
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use:[
            'file-loader'
          ]
        },
        {
          test: /\.(csv|tsv)$/,
          use:[
            'csv-loader'
          ]
        },        
        {
          test: /\.xml$/,
          use:[
            'xml-loader'
          ]
        }       
      ]
    }
}