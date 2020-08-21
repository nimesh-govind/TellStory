
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('user-sentences').del()
}
