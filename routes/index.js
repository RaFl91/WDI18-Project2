var express = require('express')
var router = express.Router()
const applicationController = require('../controllers/application')
const usersController = require('../controllers/users')
const pebblesController = require('../controllers/pebbles')
const powersController = require('../controllers/powers')

//  ===== HOME PAGE =====
router.get('/', applicationController.index)

//  ===== USER ROUTES =====
router.get('/users', usersController.index)
router.get('/users/new', usersController.new)
router.get('/users/:usersId', usersController.show)

//  ===== PEBBLE ROUTES ===== // 
router.get(`/users/:usersId/pebbles`, pebblesController.index)
router.get(`/users/:usersId/pebbles/new`, pebblesController.new)
router.get(`/users/:usersId/pebbles/:pebblesId`, pebblesController.show)

//  ===== POWER ROUTES =====
router.get(`/users/:usersId/pebbles/:pebblesId/powers`, powersController.index)
router.get(`/users/:usersId/pebbles/:pebblesId/powers/new`, powersController.new)
router.get(`/users/:usersId/pebbles/:pebblesId/powers/new/:pebblesId`, powersController.show)

module.exports = router


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//

// module.exports = router;
