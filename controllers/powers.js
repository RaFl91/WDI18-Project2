const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')



const powersController = {
    index: (req, res) => {
        // res.send("Hey whats up this is app index")
        // res.render('app/index')
        Power.find({})
            .then((powers) => {
                res.render('powers/index', {
                    powers: powers
                })
            })
    },
    new: (req, res) => {
        res.send(`This is user new page`)
    },
    show: (req, res) => {
        // res.send(`This is user show page`)
        Power.findById(powerId)
            .then((power) => {
                res.render('power/show', {
                    power: power
                })
            })
    },
    delete: (req, res) => {
        Power.destroy(req.param.id)
        .then(() => {
            res.redirect('powers/index')
        })
    }
}

module.exports = powersController