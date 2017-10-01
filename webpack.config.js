var path = require('path');
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, "dist/js/"),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000' //只解析小于25000字节的图片
        }]
    }
}