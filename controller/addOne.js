const IndexModel = require('../models/index.js');
module.exports = {
  add: async (ctx, next) => {
      const num = await IndexModel.get();
      ctx.body = await ctx.render('index.html',{data: num});
    }
}