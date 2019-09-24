const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Server is listening to port 4000');
});
