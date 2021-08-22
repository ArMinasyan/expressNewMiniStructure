const ResponseService = require("./responseService");

module.exports = class BaseService {
  constructor() {
    this.responseMessage = new ResponseService();
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

  Controller(app, path) {
    app.post(`/${path}`, async (req, res) => {
      await this.Create(req.body, res);
    })

    app.get(`/${path}`, async (req, res) => {
      await this.ReadAll(res)
    })

    app.get(`/${path}/:id`, async (req, res) => {
      await this.ReadById(req.params.id, res)
    })

    app.put(`/${path}/:id`, async (req, res) => {
      await this.Update(req.params.id, req.body, res);
    })

    app.delete(`/${path}/:id`, async (req, res) => {
      await this.Delete(req.params.id, res);
    })
  }
}
