const Router = require('koa-router');
const router = new Router();
const fs = require('fs');
const path = require('path');
const colors = require('colors');

// 获取controller目录下的文件
const ctrlDir = path.join(__dirname, 'controllers');
const files = fs.readdirSync(ctrlDir);

// 路由映射
const RoutersMap = {};
const addRouter = (fileName) => {
    const _module = require(path.join(ctrlDir, fileName));
    const keyConf = Object.keys(_module);
    keyConf.forEach(key => {
        const fnModule = _module[key];
        // 判断路由是否重复
        if (RoutersMap[key] !== undefined) {
            const msg = `Router '${key}' is duplicated in: ${RoutersMap[key].join(', ')}`;
            RoutersMap[key].push(fileName);
            return console.log(msg.red);
        }
        RoutersMap[key] = [fileName];
        if (key.startsWith('GET ')) {
            const urlPath = key.substring(4).trim();
            router.get(urlPath, fnModule);
        } else if (key.startsWith('POST ')) {
            const urlPath = key.substring(5).trim();
            router.post(urlPath, fnModule);
        } else {
            console.log(`Fail to handle: ${key}`);
        }
    });
};

// 遍历并加载各个模块
files.forEach((fileName) => {
    if (fileName.endsWith('.js')) {
        addRouter(fileName);
    }
});

module.exports = router;