const mongoose = require('mongoose');
const { connection } = require("mongoose");

module.exports = class DBService {
  connection;

  constructor() {
  }

  async connect(connectionString) {
    this.connection = await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }


  setModel(modelName, schema) {
    return connection.model(modelName, schema)
  }
}

