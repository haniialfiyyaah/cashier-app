const Controller = require('../controllers/TransactionController')

const router = require('express').Router()

router.get('/', Controller.list)
router.get('/:id/detail', Controller.detail)
router.get('/add', Controller.add) //show cashier
router.post('/add', Controller.addItem) //add items
router.get('/cart/:id/cancel', Controller.cancelItem) //remove from cart
router.get('/add/pay', Controller.pay) //payment

module.exports = router