const Controller = require('../controllers/ItemController')

const router = require('express').Router()

router.get('/', Controller.list)

module.exports = router