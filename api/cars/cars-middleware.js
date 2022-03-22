const Car = require('./cars-model');
const vin = require('vin-validator');
const { carSchema } = require('../schemas/index');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
