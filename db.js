const knex = require('knex')
const config = require("./knexfile").development
const connection = knex(config);

module.exports = {
  setStartingSentence,
  getStartingSentence,
  addSentence,
  getUserSentence,
  getStory
}

var startingSentenceIdx = 0

function setStartingSentence () {
  startingSentenceIdx = Math.floor(Math.random() * 6)
  return startingSentenceIdx
}

function getStartingSentence (db = connection){
return db('starter-sentences')
  .select('starter-sentences.sentence as startingSentence')
  .then((result) => {
    // const randomIdx = Math.floor(Math.random() * 6)
    return {startingSentence: result[startingSentenceIdx].startingSentence}
  })
}

function addSentence(sentence, db = connection) {
  return db('user-sentences')
    .insert({sentence})
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
