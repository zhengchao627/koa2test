const router = require('koa-simple-router');
const addOne = require('./addOne');
module.exports = router(_ => {
  _.get('/index', addOne.add);
});