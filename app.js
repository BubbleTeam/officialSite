// 环境判断
const IN_PROD = process.env.NODE_ENV === 'production';
const IN_MOCK = process.env.NODE_ENV === 'mock';

const fs = require('fs');
const path = require('path');
const config = require('config');

// Koa相关
const Koa = require('koa');
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware');
const app = new Koa();

// 加载路由
const router = require('./backend/routers');

if (!IN_PROD) {
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const compile = webpack(webpackConfig);
    app.use(devMiddleware(compile, {
        noInfo: true
    }));
    app.use(hotMiddleware(compile));
}
app.use(router.routes());

app.listen(config.get('port'));