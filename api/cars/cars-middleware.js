const Car = require('./cars-model');
const vin = require('vin-validator');
const { carSchema } = require('../schemas/index');

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if (!car) {
      res.status(404).json({
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = async (req, res, next) => {
  try {
    const validated = await carSchema.validate(req.body);
    req.body = validated
    next()
  } catch (err) {
    res.status(400).json({
      message: err.message
    })
  }
}

const checkVinNumberValid = async (req, res, next) => {
  if (vin.validate(req.body.vin)) {
    next()
  } else {
    next({ status: 400, message: `vin ${req.body.vin} is invalid`})
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await Car.getByVin(req.body.vin)

    if (existing) {
      next({ status: 400, message: `vin ${req.body.vin} already exists`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
