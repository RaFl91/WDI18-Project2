const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Pebble = new Schema({
    img: String,
    name: String,
    color: String,
    description: String,
    powers: [{
        type: Schema.Types.ObjectId,
        // Still unsure of how to change object Id's to names
        ref: 'Power'
    }]
})

module.exports = mongoose.model('Pebble', Pebble)