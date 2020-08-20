const knex = require('knex')
const config = require("./knexfile").development
const connection = knex(config);


module.exports = {
 addSentence,
}

function addSentence (sentence, db = connection) {
 return db('user-sentences')
 .insert(sentence)
 // .then((result) => {
 //  console.log(result)
 // })
}

