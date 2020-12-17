"use strict"

class Controller {
    static home(req, res) {
        res.render('index')
    }
}

module.exports = Controller