module.exports = class ResponseService {
  updated(message, res) {
    res.status(200).json({
      message: message
    })
  }

  deleted(message, res) {
    res.status(200).json({
      message: message
    })
  }

  notFound(message, res) {
    res.status(404).json({
      message: message
    })
  }

  exist(message, res) {
    res.status(409).json({
      message: message
    })
  }

  found(data, res) {
    res.status(200).json({
      data: data
    })
  }

  otherError({ message = null, data = null, status = 200 }, res) {
    if (message) {
      res.status(status).json({
        message: message
      })
    }

    res.status(status).json({
      data: data
    })

  }
}
