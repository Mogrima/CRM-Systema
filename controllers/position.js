const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function(req, res) {
  try {
    const positions = await Position.find({
      category: req.params.categoryId,
      user: req.user.id
    })
    res.status(200).json(positions)
  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.create = async function(req, res) {
  try {

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.remove = async function(req, res) {
  try {

  } catch (error) {
    errorHandler(res, error)
  }
}

module.exports.update = async function(req, res) {
  try {

  } catch (error) {
    errorHandler(res, error)
  }
}