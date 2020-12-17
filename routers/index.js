const Controller = require('../controllers/HomeController')
const router = require('express').Router()
const items = require('./items')
const transactions = require('./transactions')

router.get('/', Controller.home)
router.use('/items', items)
router.use('/transactions', transactions)

module.exports = router