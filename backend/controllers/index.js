const Index = async (ctx, next) => {
    ctx.response.body = 'Hello, world';
};

module.exports = {
    'GET /': Index
}