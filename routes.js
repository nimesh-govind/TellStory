const express = require('express')

const db = require('./db')

const router = express.Router()
module.exports = router

router.get('/' (req, res) => {
  // db
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