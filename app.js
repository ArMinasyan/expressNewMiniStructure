const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const DBService = require('./services/DBService');
const BaseService = require('./services/BaseService');

new DBService().connect("mongodb://localhost:27017/testExpress").then()
new BaseService().setApp(app);

const UserRouter = require('./controllers/UserController')
app.use(UserRouter);

app.listen(8080, () => {
  console.log('Start')
})
