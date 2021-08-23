const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const DBService = require('./services/DBService');
new DBService().connect("mongodb://localhost:27017/testExpress").then();

const services = require('./services/services');


for (let key in services) {
  new services[key](app)
}

app.listen(8000, () => {
  console.log('Start')
})
