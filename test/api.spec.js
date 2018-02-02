
const request = require('supertest');
const app = require('../app');
describe('测试路由', function() {
  it('加一', function(done) {
    request(app.listen())
      .get('/index')
      .expect(200)
      .end(function(err,res){
        if(res.data==1)return done(err);
        done();
      })
  });
});