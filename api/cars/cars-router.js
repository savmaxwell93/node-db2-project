const express = require('express');
const Car = require('./cars-model');
const md = require('./cars-middleware');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json(`getting all cars`)
})
router.get('/:id', (req, res, next) => {
    res.json(`getting cars with id ${req.params.id}`)
})
router.post('/', (req, res, next) => {
    res.json(`creating new car`)
})
router.put('/:id', (req, res, next) => {
    res.json(`updating car with id ${req.params.id}`)
})
router.delete('/:id', (req, res, next) => {
    res.json(`deleting car with id ${req.params.id}`)
})

module.exports = router;
