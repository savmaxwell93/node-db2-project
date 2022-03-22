// STRETCH
const fiats = [
    {
        vin: "3C3CFFER4CT376606",
        make: "fiat",
        model: "500",
        mileage: 150000,
        title: "clean",
        transmission: "automatic"
    },
    {
        vin: "3C4PFABY0CT249895",
        make: "fiat",
        model: "Freemont",
        mileage: 100000,
        title: "clean",
        transmission: "automatic"
    },
    {
        vin: "ZFBCFADH4EZ017858",
        make: "fiat",
        model: "500L",
        mileage: 85000,
    },
    {
        vin: "3C3CFFDR3ET300976",
        make: "fiat",
        model: "500c",
        mileage: 67000,
        title: "clean",
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate();
    await knex('cars').insert(fiats)
}