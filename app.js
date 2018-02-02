const Koa = require('koa');
const app = new Koa();
const convert = require('koa-convert');
const path = require('path');
const render = require('koa-swig');
const co = require('co'); 
const server = require('koa-static');
const Router = require('./controller/index');
app.context.render = co.wrap(render({
	root: path.join(__dirname, './views'),
	autoescape: true,
	cache: 'memory',
	ext: 'html',
	writeBody: false
}));
app.use(Router);
app.use(convert(server(path.join(__dirname, './assets')))); // 静态资源文件夹
app.listen(3000);
module.exports = app;