
exports.up = (knex) => {
  return knex.schema.createTable('user-sentences', (table) => {
    table.increments('id')
    table.string('sentence')
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('user-sentences')
}
