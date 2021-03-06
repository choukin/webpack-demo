const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
console.log( process.env.npm_config_report)
let webpackconfig = merge(common, {
    mode: 'production',
    devtool:'source-map',
    plugins:[
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new BundleAnalyzerPlugin()
    ]
})

if (process.env.npm_config_report) {
    webpackconfig.plugins.push(new BundleAnalyzerPlugin())
}


module.exports = webpackconfig