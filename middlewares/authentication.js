let authentication = (req, res, next) => {
    req.session.username ? next() : res.send('Harus Login Dahulu')
}

module.exports = authentication