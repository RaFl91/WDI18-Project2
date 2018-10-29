const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    username: String,
    img: String,
    rocks: [{
        type: Schema.Types.ObjectId,
        ref: 'Pebble'
    }],
    description: String

})

module.exports = mongoose.model('User', User)