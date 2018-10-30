const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')



const usersController = {
    index: (req, res) => {
        // res.send("Hey whats up this is app index")
        res.render('app/index')
        
    }, 
    new: (req, res) => {
        res.send(`This is user new page`)
    },
    show: (req, res) => {
        res.send(`This is user show page`)
    }
}

module.exports = usersController