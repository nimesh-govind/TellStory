const knex = require('knex')
const config = require("./knexfile").development
const connection = knex(config);

module.exports = {
  addSentence,
  getStartingSentence,
  getUserSentence,
  getStory
}

function addSentence(sentence, db = connection) {
  return db('user-sentences')
    .insert({sentence})
}

function getStartingSentence (db = connection){
return db('starter-sentences')
  .select('starter-sentences.sentence as startingSentence')
  .then((result) => {
    // const randomIdx = Math.floor(Math.random() * 6)
    return {startingSentence: result[0].startingSentence}
  })
}

function getUserSentence (db = connection) {
  return db('user-sentences')
    .select('user-sentences.sentence as userSentence')
    .then((result) => {
      return { userSentence: result[result.length-1].userSentence }
    })
}

function getStory (db = connection) {
  return db('user-sentences')
  .select('user-sentences.sentence as userSentence')
}
