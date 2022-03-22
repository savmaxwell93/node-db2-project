const express = require('express');
const Car = require('./cars-model');
const md = require('./cars-middleware');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.status(200).json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', md.checkCarId, async (req, res, next) => {
    try {
        res.status(200).json(req.car);
    } catch (err) {
        next(err)
    }
})

router.post('/',
md.checkCarPayload,
md.checkVinNumberValid,
md.checkVinNumberUnique,
async (req, res, next) => {
    try {
        const newCar = await Car.create(req.body)
        res.status(200).json(newCar)
    } catch (err) {
        next(err)
    }
})

router.put('/:id',
md.checkCarId,
md.checkCarPayload,
md.checkVinNumberValid,
md.checkVinNumberUnique,
async (req, res, next) => {
    try {
        const updated = await Car.updateById(req.params.id, req.body);
        res.status(200).json(updated);
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', md.checkCarId, async (req, res, next) => {
    try {
        const deleted = await Car.deleteById(req.params.id);
        res.status(200).json(deleted);
    } catch (err) {
        next(err)
    }
})

module.exports = router;
