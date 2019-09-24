const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Home';
});

router.get('/about', (ctx, next) => {
  ctx.body = 'About';
});

router.get('/idols/:name', (ctx, next) => {
  const { name } = ctx.params;
  ctx.body = `${name}은 누구일까?`;
});

router.get('/post', (ctx, next) => {
  const { id } = ctx.request.query;
  if (id) {
    ctx.body = `post: #${id}`;
  } else {
    ctx.body = 'post has not id.';
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Server is listening to port 4000');
});
