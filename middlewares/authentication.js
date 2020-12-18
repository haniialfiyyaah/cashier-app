let authentication = (req, res, next) => {
    req.session.username ? next() : 
    ( req.app.locals.error = 'Harus Login Terlebih Dahulu' ,
        res.redirect('/login'))
}

module.exports = authentication