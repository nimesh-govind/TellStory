const express = require('express')

const db = require('./db')

const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
  db.getStartingSentence()
    .then(viewData => {
      res.render('home', viewData)
    })
    .catch((err) => {
      res.status(500).send("DATABASE ERROR: " + err.message)
    })
  // res.render('home')
})

router.get('/next-sentence', (req, res) => {
  db.getUserSentence()
    .then(viewData => {
      res.render('next-sentence', viewData)
    })
    .catch((err) => {
      res.status(500).send("DATABASE ERROR: " + err.message)
    })
  // res.render('next-sentence')
})

router.post("/add-sentence", (req, res) => {
  console.log('req body:', req.body)
  const sentence = req.body.sentence
  console.log('sentence:', sentence)
  db.addSentence(sentence)
    .then(() => res.redirect("/next-sentence"))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Ohhh no an error: 500!")
    })
})

router.get("/display-story",(req,res) => {
  db.getStartingSentence()
    .then(startingSentence => {
      console.log('starting sentence1:', startingSentence)
      db.getStory()
      .then(story => {
        console.log('starting sentence2:', startingSentence)
        console.log('story:', story)
        res.render('display-story', {
          startingSentence: startingSentence.startingSentence,
          story: story
        })}
      )
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Ohhh no an error: 500!")
    })
  })