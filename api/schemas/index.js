const yup = require('yup');

const carSchema = yup.object({
    vin: yup
        .string()
        .required('vin is missing'),
    make: yup
        .string()
        .required('make is missing'),
    model: yup
        .string()
        .required('model is missing'),
    mileage: yup
        .number()
        .required('mileage is missing')
})

module.exports = { carSchema }