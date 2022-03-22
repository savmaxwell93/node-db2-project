const express = require('express');
const Car = require('./cars-model');
const md = require('./cars-middleware');
const router = express.Router();

router.get('/', (req, res, next) => {
    //CODE HERE
})
router.get('/:id', (req, res, next) => {
    //CODE HERE
})
router.post('/', (req, res, next) => {
    //CODE HERE
})
router.put('/:id', (req, res, next) => {
    //CODE HERE
})
router.delete('/:id', (req, res, next) => {
    //CODE HERE
})

module.exports = router;
