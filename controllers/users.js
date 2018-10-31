const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')



const usersController = {
    index: (req, res) => {
        // res.send("Hey whats up this is app index")
        // res.render('app/index')
        User.find().populate('pebbles')
            .then((users) => {
                res.render('users/index', {
                    users: users
                })
            })
    },
    new: (req, res) => {
        res.send(`This is user new page`)
    },
    show: (req, res) => {
        // res.send(`This is user show page`)
        User.findById(userId).populate('pebbles')
        .then((user) => {
            res.render('user/show', {user: user})
        })
    }
}

module.exports = usersController