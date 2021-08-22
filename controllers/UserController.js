const Router = require('express').Router();
const userService = require('../services/UserService');
const user = new userService();

Router.post('/user', async (req, res) => {
  await user.Create(req.body, res);
})

Router.get('/user', async (req, res) => {
  await user.ReadAll(res);
})

Router.get('/user/:userId', async (req, res) => {
  await user.ReadById(req.params.userId, res);
})

Router.put('/user/:userId', async (req, res) => {
  await user.Update(req.params.userId, req.body, res);
})

Router.delete('/user/:userId', async (req, res) => {
  await user.Delete(req.params.userId, res);
})

module.exports = Router
