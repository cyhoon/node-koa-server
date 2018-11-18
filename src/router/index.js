const Router = require('koa-router');
const { getUsers, getUser } = require('../controller');

const router = new Router();

router.get('/', (ctx) => ctx.body = '안녕하세요, 최영훈입니다.');

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
