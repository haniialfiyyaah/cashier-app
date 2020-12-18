"use strict"

class Controller {
    static home(req, res) {
        res.render('index', {name: req.session.name})
    }
}

module.exports = Controller