const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const inProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'public/src/javascript/pages/index/index')
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js',
            root: path.resolve(__dirname, 'public'),
            source: path.resolve(__dirname, 'public/src/'),
            script: path.resolve(__dirname, 'public/src/javascript'),
            comp: path.resolve(__dirname, 'public/src/javascript/components'),
            util: path.resolve(__dirname, 'public/src/javascript/util'),
            script: path.resolve(__dirname, 'public/src/javascript'),
            modules: path.resolve(__dirname, 'public/src/javascript/modules')
        },
        extensions: ['.js', '.vue', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: inProd
            ? 'javascript/[name]-[hash].js'
            : 'javascript/[name].js'
    },
    devtool: inProd ? 'cheap-source-map' : 'source-map',
    module: {
        rules: [
            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.js|\.jsx$/,
                include: path.resolve(__dirname, 'public'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template/index.html'),
            filename: 'index.html',
            inject: true
        }),
        new ExtractTextWebpackPlugin(
            inProd ? '[name]-[contenthash].css' : '[name].css'
        ),
        new CleanWebpackPlugin(['dist'])
    ].concat(
        inProd
        ? [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ] : []
    ),
    watch: !inProd
};