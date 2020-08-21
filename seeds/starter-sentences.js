
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('starter-sentences').del()
    .then(function () {
      // Inserts seed entries
      return knex('starter-sentences').insert([
        { id: 1, sentence: 'To save his life he would have to kill...'},
        { id: 2, sentence: 'It was a hot, sunny morning in July when Mother revealed her true identity...'},
        { id: 3, sentence: 'Alcohol! Because no great story started with someone eating salad...'},
        { id: 4, sentence: 'All my life I thought air was for free, until I bought a bag of crisps...'},
        { id: 5, sentence: 'I woke at midnight, startled by the loud noise outside my bedroom door, I opened the door to find out the cause...'},
        { id: 6, sentence: 'Sweat fell as they hauled the chest from the ground, eager with anticipation to see what was inside...'}
      ])
    })
}
