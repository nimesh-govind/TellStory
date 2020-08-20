const express = require('express')

const db = require('./db')

const router = express.Router()
module.exports = router

router.get('/', (req, res) => {
  // db.getStartingSentence()
  //   .then(viewData => {
  //     res.render('home', viewData)
  //   })
  //   .catch((err) => {
  //     res.status(500).send("DATABASE ERROR: " + err.message)
  //   })
  res.render('home')
})

router.get('/next-sentence', (req, res) => {
  // db.getUserSentence()
  //   .then(viewData => {
  //     res.render('next-sentence', viewData)
  //   })
  //   .catch((err) => {
  //     res.status(500).send("DATABASE ERROR: " + err.message)
  //   })
  res.render('next-sentence')
})

router.post("/add-sentence", (req, res) => {
  const { sentence } = req.body
  db.addSentence(sentence)
    .then(res.redirect("/next-sentence"))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send("Ohhh no an error: 500!")
    })
})

router.get('/display-story', (req, res) => {
  // db.getStory()
  //   .then(viewData => {
  //     res.render('story', viewData)
  //   })
  //   .catch((err) => {
  //     res.status(500).send("DATABASE ERROR: " + err.message)
  //   })
  res.render('display-story')
})


// router.get('/', (req, res) => {
//   db.getRiders()
//     .then(riders => {
//       const viewData = {
//         riders: riders
//       }
//       res.render('home', viewData)
//     })
// })

// router.get('/rider/:id', (req, res) => {
//   const id = Number(req.params.id)
//   db.getRiderById(id)
//     .then(viewData => {
//       res.render('rider', viewData)
//     })
//     .catch(err => {
//       // Security best practice violation:
//       // Should not show error messages to users/hackers
//       res.status(500).send(err.message)
//     })
// })