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
router.post('/user', usersController.create)
router.delete(`/users/:usersId`, pebblesController.delete)

//  ===== PEBBLE ROUTES ===== // 
router.get(`/users/:usersId/pebbles`, pebblesController.index)
router.get(`/users/:usersId/pebbles/new`, pebblesController.new)
router.get(`/users/:usersId/pebbles/:pebblesId`, pebblesController.show)
router.post(`/users/:usersId/pebbles`, pebblesController.create)
router.delete(`/users/:usersId/pebbles/:pebblesId`, pebblesController.delete)
router.patch(`/users/:usersId/pebbles/:pebblesId`, pebblesController.update)
router.put(`/users/:usersId/pebbles/:pebblesId`, pebblesController.update)

//  ===== POWER ROUTES =====
router.get(`/users/:usersId/pebbles/:pebblesId/powers`, powersController.index)
router.get(`/users/:usersId/pebbles/:pebblesId/powers/new`, powersController.new)
router.get(`/users/:usersId/pebbles/:pebblesId/powers/:pebblesId`, powersController.show)

module.exports = router


