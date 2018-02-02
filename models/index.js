const rp = require('request-promise');
const options = {
    method: 'GET',
    uri: 'http://localhost/phpapi/zan.php',
    json: true
}

const IndexModel = {
    get(){
        return rp(options)
        .then(function (data) {
            return data;
        })
        .catch(function (err) {
          return err;
        });
    }
};
module.exports = IndexModel;