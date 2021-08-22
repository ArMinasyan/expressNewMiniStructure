const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const DBService = require('./services/DBService');
const services = require('./services/services');
new DBService().connect("mongodb://localhost:27017/testExpress").then()

for (let key in services) {
  new services[key](app)
}

app.listen(8080, () => {
  console.log('Start')
})
