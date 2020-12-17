"use strict"
const {Employee} = require('../models')
const {compare} = require('../helpers/hashPassword');
class Controller {
    static showRegister(req, res) {
        res.render('employees/register')
    }
    static register(req, res) {
        const {name,username, password} = req.body
        Employee
            .create({name,username, password})
            .then(data => res.redirect('/'))
            .catch(err => res.render(err))
    }
    static showLogin(req, res) {
        res.render('employees/login')
    }
    static login(req, res) {
        const {username, password} = req.body
        Employee
            .findOne({
                where: {username},
                // attributes: {exclude: ['password']}
            })
            .then(data => {
                if (compare(password, data.password)) {
                    req.session.EmployeeId = data.id
                    req.session.name = data.name
                    req.session.username = data.username
                    res.redirect('/')
                }
                // res.send(data)
            })
            .catch(err => res.send('EERROR'))
    }
    static logout(req, res) {
        delete req.session.cookie.id
        delete req.session.name
        delete req.session.username
        res.redirect('/login')
    }
}

module.exports = Controller