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


app.use((req, res, next) => {
  if (Object.keys(services).includes(req.url.split('/')[1])) next();
  else res.status(404).send("Not found");
})

app.post('/:path', async (req, res) => {
  await services[req.params.path].Create(req.body, res);
})

app.get('/:path', async (req, res) => {
  await services[req.params.path].ReadAll(res)
})

app.get('/:path/:id', async (req, res) => {
  await services[req.params.path].ReadById(req.params.id, res)
})

app.put('/:path/:id', async (req, res) => {
  await services[req.params.path].Update(req.params.id, req.body, res);
})

app.delete('/:path/:id', async (req, res) => {
  await services[req.params.path].Delete(req.params.id, res);
})


app.listen(8080, () => {
  console.log('Start')
})
