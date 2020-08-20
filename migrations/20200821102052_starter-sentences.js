
exports.up = (knex) => {
  return knex.schema.createTable('starter-sentences', (table) => {
    table.increments('id').primary()
    table.string('sentence')
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('starter-sentences')
}
