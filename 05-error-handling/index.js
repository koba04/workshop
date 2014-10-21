
var koa = require('koa');

var app = module.exports = koa();


app.on('error', function(err, ctx) {
  ctx.response.status = 500;
  ctx.response.body = 'internal server error';
});

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    // your error handling logic goes here
    app.emit('error', err, this);
  }
});

app.use(function* () {
  throw new Error('boom!');
});
