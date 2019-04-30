module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}

// //auth for express/HTML routes with session
// const auth = {
//     required: function (req, res, next) {
//         if (req.user && req.user.email) {
//             return next();
//         } else {
//             res.redirect('/users/login');
//         }
//     },
//     optional: function (req, res, next) {
//         next();
//     },
// };