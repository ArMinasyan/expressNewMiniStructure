module.exports = class BaseService {
  constructor() {
  }

  Create(data, res) {
  }

  ReadAll(res) {
  }

  ReadById(id, res) {

  }

  Update(id, data, res) {
  }

  Delete(id, res) {
  }

  Message(message, res) {
    const responseMessage = {};
    if (message.data) responseMessage.data = message.data;
    if (message.message) responseMessage.message = message.message;

    res.status(message.statusCode || 200).json(responseMessage)
  }

  setApp(app) {
    this.app = app;
  }
}
