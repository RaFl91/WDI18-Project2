const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')



const usersController = {
    index: (req, res) => { 
        User.find({}).populate('pebbles')
            .then((users) => {
                console.log(users)
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
        const userId = req.params.id
        User.findById(userId).populate('pebbles')
        .then((user) => {
            res.render('users/show', {user: user})
        })
    },
    create: (req, res) => {
        // User.create({
        //     username: req.body.username,
        //     img: req.body.img,
        //     rock: req.body.rock,
        //     description: req.body.description
        // })
        // .then(() => {
        //     res.redirect('users/index')
        // })
    }
}

module.exports = usersController