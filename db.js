const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = knex(config);

module.exports = {
  setStartingSentence,
  getStartingSentence,
  addSentence,
  getUserSentence,
  getStory
}

var startingSentenceIdx = 0

function setStartingSentence (db = connection) {
  db.seed.run()
  startingSentenceIdx = Math.floor(Math.random() * 6)
  return startingSentenceIdx
}

function getStartingSentence (db = connection){
return db('starter-sentences')
  .select('starter-sentences.sentence as startingSentence')
  .then((result) => {
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
