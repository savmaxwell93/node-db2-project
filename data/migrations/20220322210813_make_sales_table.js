/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('sales', tbl => {
        tbl.increments('sales_id')
        tbl.string('buyer', 128).notNullable()
        tbl.integer('price').unsigned().notNullable()
        tbl.integer('car_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('cars')
            .onUpdate('RESTRICT')
            .onDelete('RESTRICT')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales')
};
