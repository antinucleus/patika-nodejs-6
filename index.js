const Koa = require('koa');

const routes = require('./routes');

const PORT = 3000;

const app = new Koa();

app.use((ctx) => {
  const { url } = ctx.request;

  let route = '';
  let statusCode = 200;

  if (url === '/') {
    route = 'home';
  } else {
    route = url.split('/')[1];

    if (!Object.keys(routes).includes(route)) {
      route = 'notFound';
      statusCode = 404;
    }
  }

  ctx.response.status = statusCode;
  ctx.body = routes[route];
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
