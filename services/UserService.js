const DBService = require('./DBService');
const userSchema = require('../Schemas/user.schema');
const BaseService = require('./BaseService');
const { mongo } = require("mongoose");

module.exports = class UserService extends BaseService {
  constructor(app) {
    super();
    this.userModel = (new DBService()).createModel('user', userSchema);
    this.Controller({ app, path: 'user' });
  }


  async Create(data, res) {
    const isExist = await this.userModel.findOne({
      username: data.username
    });

    if (isExist) this.responseMessage.exist('User already exist', res);
    else {
      const user = await this.userModel.create(data);
      this.responseMessage.found(user, res)
    }
  }

  async ReadAll(res) {
    const data = await this.userModel.find();
    this.responseMessage.found(data, res)
  }

  async ReadById(id, res) {
    if (mongo.ObjectID.isValid(id)) {
      const data = await this.userModel.findById(id);
      if (data) {
        this.responseMessage.found(data, res)
      } else {
        this.responseMessage.notFound("User not found", res);
      }
    } else {
      this.responseMessage.otherError({
        message: "Invalid ID",
        status: 400
      }, res)
    }
  }

  async Update(id, data, res) {
    if (mongo.ObjectID.isValid(id)) {
      const usernameIsExist = await this.userModel.findOne({ username: data.username });
      if (usernameIsExist) {
        this.responseMessage.otherError({
          statusCode: 409,
          message: "Username already exist"
        }, res)
      } else {
        const user = await this.userModel.findByIdAndUpdate(id, data);

        if (user) {
          this.responseMessage.updated("User's data updated", res);
        } else {
          this.responseMessage.notFound("User not found", res);
        }
      }
    } else {
      this.responseMessage.otherError({
        message: "Invalid ID",
        status: 400
      }, res)
    }
  }

  async Delete(id, res) {
    if (mongo.ObjectID.isValid(id)) {
      const user = await this.userModel.findByIdAndDelete(id);

      if (user) {
        this.responseMessage.deleted("User's data deleted", res);
      } else {
        this.responseMessage.notFound("User not found", res);
      }
    } else {
      this.responseMessage.otherError({
        message: "Invalid ID",
        status: 400
      }, res)
    }
  }
}
