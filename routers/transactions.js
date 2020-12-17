const Controller = require('../controllers/TransactionController')

const router = require('express').Router()

router.get('/', Controller.list)

module.exports = router