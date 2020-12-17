const Controller = require('../controllers/TransactionController')

const router = require('express').Router()

router.get('/', Controller.list)
router.get('/:id/detail', Controller.detail)

module.exports = router