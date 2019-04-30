//auth.js
const express = require('express');
const authRouter = express.Router();
var app = express();
const authController = require('../controllers/auth');
const User = require('../models/user');
const auth = require('../routes/auth');
require('../controllers/passport');
const passport = require('passport');




//router.use(flash());

// router.get('/', auth.required, (req, res, next) => {
//     console.log("found user in session " + req.session.user);
//     res.render('user', {
//         user: req.user
//     });
// });




/* authController@getRegistrationFormt*/
authRouter.get('/register', authController.getRegistrationForm);

/* authController@postRegistrationFormt*/
authRouter.post('/register', authController.postRegistrationForm);

/* authController@getLoginFormt*/
authRouter.get('/login', authController.getLoginForm);

/* authController@postLoginFormt*/
authRouter.post('/login', authController.postLoginForm);

/* get user dashboard*/
authRouter.get('/userDashboard', authController.getUserDashboard);


/* authController@postlogout*/
authRouter.get('/logout', authController.getLogout);

// router.use(function (err, req, res, next) {
//     console.error(err.stack);
// });

// router.get('/', auth.required, (req, res, next) => {
//     console.log("found user in session " + req.session.user);
//     res.render('user', {
//         user: req.user
//     });
// });

module.exports = authRouter;