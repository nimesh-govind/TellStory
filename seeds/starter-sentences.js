
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('starter-sentences').del()
    .then(function () {
      // Inserts seed entries
      return knex('starter-sentences').insert([
        { id: 1, sentence: 'To save his life he would have to kill.'}
      ])
    })
}
