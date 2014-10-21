
var koa = require('koa');

var app = module.exports = koa();

app.use(function* (next) {
  if (this.request.path === '/') {
    this.response.body = 'hello world';
  } else {
    yield next;
  }
});

app.use(function* (next) {
  if (this.request.path === '/404') {
    this.response.body = 'page not found';
  } else {
    yield next;
  }
});

app.use(function* (next) {
  if (this.request.path === '/500') {
    this.response.body = 'internal server error';
  } else {
    yield next;
  }
});
