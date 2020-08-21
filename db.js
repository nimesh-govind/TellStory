const knex = require('knex')
const config = require("./knexfile").development
const connection = knex(config);


module.exports = {
  addSentence,
  getStartingSentence,
  getUserSentence,
  getStory
}

function addSentence (sentence, db = connection) {
  return db('user-sentences')
  .insert(sentence)
 // .then((result) => {
 //  console.log(result)
 // })
}

function getStartingSentence (db = connection){
return db('starter-sentences')
  .select('starter-sentences.sentence as startingSentence')
  .then((result) => {
  // console.log(result)
  sentence = {startingSentence: result[0].startingSentence}
  // console.log(sentence)
  return sentence
  })
}

function getUserSentence(db = conncetion)
{

}

function getStory(db = conncetion)
{

}

