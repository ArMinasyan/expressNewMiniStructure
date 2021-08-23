const DBService = require('./DBService');
const userSchema = require('../Schemas/user.schema');
const BaseService = require('./BaseService');

function mw(req, res, next) {
  console.log(req.method, req.url)
  next();
}

module.exports = class UserService extends BaseService {
  constructor(app) {
    super();
    this.userModel = (new DBService()).createModel('user', userSchema);
    this.Controller({ app });
  }


  async ReadAll(res) {
    this.responseMessage.createOrFound([{ 'name': "admin" }], res)
  }


}
