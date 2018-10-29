const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Pebble = new Schema({
    img: String,
    name: String,
    color: String,
    description: String,
    power: [{
        type: Schema.Types.ObjectId,
        ref: 'Power'
    }]
})

module.exports = mongoose.model('Pebble', Pebble)