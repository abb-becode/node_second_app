// const express = require('express')
const router = require('express-promise-router')()
// const router = express.Router

const db = require('../models')
const pets = db.pets

// Add new pet
router.route('/pets')
  .get(async (req, res) => {
    console.log('fetching all pets from DB')

    const cursor = await pets.find()
    res.send(cursor)
  })

// Add new pet
router.route('/pets/new')
  .post(async (req, res) => {
    console.log('adding new pet')
    let data = req.body

    // Create a new pet
    // eslint-disable-next-line new-cap
    const pet = new pets(data)

    // save pet to database
    await pet.save((err) => {
      if (err) {
        console.log('something went wrong when saving')
        res.sendStatus(400)
      }
    })
    // Respond with token
    const token = 'success'
    res.status(200).json({ token })
    console.log('miaou')
  })

module.exports = router

// Create a new pet
/* router.route('/new')
  .post((req, res) => {
    let { email, username } = req.body

    // load json file to content variable
    // eslint-disable-next-line handle-callback-err
    jsonfile.readFile(file_path, (err, content) => {
      // add user to array
      content.push({ email: email, username: username })

      console.log(`Added ${email} to DB.`)

      // write content to json file
      jsonfile.writeFile(file_path, content, (err) => {
        console.log(err)
      })

      res.sendStatus(200)
    })
  })
*/
/*
// Remove user from json file
router.route('/delete')
  .delete((req, res) => {
    let email = req.body.email

    // eslint-disable-next-line handle-callback-err
    jsonfile.readFile(file_path, (err, content) => {
      for (let i = content.length - 1; i >= 0; i--) {
        if (content[i].email === email) {
          console.log('removing ' + content[i].email + 'from DB')
          content = content.filter(el => el.email !== email)
        }
      }

      jsonfile.writeFile(file_path, content, function (err) {
        console.log(err)
      })

      res.sendStatus(200)
    })
  })

// Update user
router.route('/update')
  .put((req, res) => {
    let user
    let username = req.body.username
    let email = req.query.email

    // eslint-disable-next-line handle-callback-err
    jsonfile.readFile(file_path, (err, content) => {
      for (let i = content.length - 1; i >= 0; i--) {
        if (content[i].email === email) {
          console.log('user updated ' + req.query.email + ' has now username : ' + username)

          user = content[i]
          user.username = username
        }
      }

      jsonfile.writeFile(file_path, content, function (err) {
        console.log(err)
      })
    })
    res.send(user)
  })

// Get a specific user (by email)
router.route('/user')
  .get((req, res) => {
    let user
    let email = req.query.email

    // eslint-disable-next-line handle-callback-err
    jsonfile.readFile(file_path, (err, content) => {
      for (let i = content.length - 1; i >= 0; i--) {
        if (content[i].email === email) {
          console.log('found user :')
          console.log(content[i])
          user = content[i]
        }
      }

      res.send(user)
    })
  })
*/

