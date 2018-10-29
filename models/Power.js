const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Power = new Schema({
    power: Number
})

module.exports = mongoose.model('Power', Power)
