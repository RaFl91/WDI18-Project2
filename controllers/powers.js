const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')



const powersController = {
    index: (req, res) => {
        // res.send("Hey whats up this is app index")
        res.render('app/index')
    }
}

module.exports = powersController