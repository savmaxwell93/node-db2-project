const express = require('express');
const Car = require('./cars-model');
const md = require('./cars-middleware');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.json(`getting all cars`)
})
router.get('/:id', md.checkCarId, async (req, res, next) => {
    res.json(`getting cars with id ${req.params.id}`)
})
router.post('/',
md.checkCarPayload,
md.checkVinNumberValid,
md.checkVinNumberUnique,
async (req, res, next) => {
    res.json(`creating new car`)
})
router.put('/:id',
md.checkCarId,
md.checkCarPayload,
md.checkVinNumberValid,
md.checkVinNumberUnique,
async (req, res, next) => {
    res.json(`updating car with id ${req.params.id}`)
})
router.delete('/:id', md.checkCarId, async (req, res, next) => {
    res.json(`deleting car with id ${req.params.id}`)
})

module.exports = router;
