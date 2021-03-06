const User = require('../models/User')
const Pebble = require('../models/Pebble')
const Power = require('../models/Power')


const pebblesController = {
    index: (req, res) => {
        // res.send("Hey whats up this is app index")
        // res.render('app/index')
        Pebble.find({}).populate('powers')
            .then((pebbles) => {
                res.render('pebbles/index', {
                    pebbles: pebbles
                })
            })
    },
    new: (req, res) => {
        res.send(`This is user new page`)
    },
    show: (req, res) => {
        // res.send(`This is user show page`)
        Pebble.findById(pebbleId).populate('powers')
            .then((pebble) => {
                res.render('pebble/show', {
                    pebble: pebble
                })
            })
    },
    create: (req, res) => {
        User.create({
            img: req.body.img,
            name: req.body.name,
            color: req.body.color,
            description: req.body.description,
            powers: req.body.powers
        })
        .then(() => {
            res.redirect('pebbles/index')
        })
    },
    delete: (req, res) => {
        Pebble.destroy(req.param.id)
        .then(() => {
            res.redirect('pebbles/index')
        })
    },
    update: (req, res) => {
        Todo.update({
            img: req.body.img,
            name: req.body.name,
            color: req.body.color,
            description: req.body.description,
            powers: req.body.powers
          }, req.params.id).then(() => {
            res.redirect('pebbles/index');
          })
    }
}

// Wrote code for full crud; not able to test it yet...


module.exports = pebblesController