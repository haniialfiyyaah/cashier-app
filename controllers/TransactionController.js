"use strict"
const { Transaction, Item } = require('../models')

class Controller {
    static list(req, res) {
        Transaction
            .findAll()
            .then(data => res.send(data))
            .catch(err => res.send(err))
    }
}

module.exports = Controller