const mongoose = require('mongoose');
const { connection } = require("mongoose");

module.exports = class DBService {
  connection;

  constructor() {
  }

  async connect(connectionString) {
    try {
      this.connection = await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
      });
    } catch (err) {
      throw new err
    }
  }


  createModel(modelName, schema) {
    return connection.model(modelName, schema)
  }
}

