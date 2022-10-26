var validateAdmin = function (req, res, next) {
    if (!req.session.User) {
        res.redirect('/login')
        return;
    }
    if (req.session.User.username !== 'admin') {
        res.redirect('/login')
        return;
    }



    next()
}
module.exports = validateAdmin