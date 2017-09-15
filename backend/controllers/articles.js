const Articles = async (ctx, next) => {
    ctx.response.body = 'Articles';
};

module.exports = {
    'GET /articles': Articles
}