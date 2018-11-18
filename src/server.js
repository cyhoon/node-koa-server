const koa = require('koa');

const router = require('./router');

const app = new koa();
app.use(router.routes());

app.listen(3000, () => { console.info('Server is running on port 3000'); });
