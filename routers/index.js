const Controller = require('../controllers/HomeController')
const router = require('express').Router()
const items = require('./items')
const transactions = require('./transactions')
const employees = require('./employees')

router.use('/', employees)

router.get('/', Controller.home)
router.use('/items', items)
router.use('/transactions', transactions)

const pdfRoute = require('./pdfmake');
router.use('/pdfMake', pdfRoute);

module.exports = router