const db = require('../../data/db-config');

const getAll = () => {
  return db('cars');
}

const getById = (id) => {
  return db('cars').where({ id }).first();
}

const create = async (car) => {
  const [ id ] = await db('cars').insert(car);
  return getById(id);
}

const updateById = async (id, car) => {
  await db('cars').where({ id }).update(car);
  return getById(id);
}

const deleteById = async (id) => {
  const deleted = await getById(id);
  await db('cars').where({ id }).del();
  return deleted;
}

const getByVin = async (vin) => {
  return db('cars').where('vin', vin).first();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByVin
}
