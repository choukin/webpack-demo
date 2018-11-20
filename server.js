const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config.js')

const compiler = webpack(config)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    quiet: true
  })
  

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
  })
  // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })
  
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

app.listen(3000,function(){
    console.log('Example app listening on port 3000\n')
})
// let webpack = require("webpack");
// let path = require("path");
// let express = require("express");
// let webpackDevMiddleWare = require("webpack-dev-middleware");
// let webpackHotMiddleWare = require("webpack-hot-middleware");
// let webpackConfig = require("./webpack.config.js");
// let app = express();
// let compiler = webpack(webpackConfig);
// app.use(express.static(path.join(__dirname, "/")));
// //webpack-dev-middleware输出的文件存在于内存中
// //将编译器挂载给 webpack dev middleware 切它的publicPath要与webpack.config.js 的output.publicPath一致，不然找不到打包后的bundle文件
// app.use(webpackDevMiddleWare(compiler, {
//     publicPath: webpackConfig.output.publicPath
// }));
// //将编译器挂载给 webpack dev middleware
// app.use(webpackHotMiddleWare(compiler, {
//     heartbeat: 2000
// }));
// //所有请求 返回一个文件 即index.html
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"))
// });
// app.listen(8375, "localhost", () => {
//     console.log('listening as http://localhost:8375')
// })