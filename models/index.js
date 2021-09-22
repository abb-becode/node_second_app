// Create a connection to database
let mongoose = require('mongoose')
const uri = 'mongodb+srv://abb:Abb.Mongodb.92@cluster0.na3ue.mongodb.net/Cluster0'
const db = mongoose.connect(uri)

// create a model
// pet
db.pets = require('./pet.js')
module.exports = db
