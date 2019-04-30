//App.js

//load environment variable
require('dotenv').config();

// grab our dependencies
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
//require('./controllers/passport');
const passport = require('passport');


mongoose.Promise = global.Promise;
//Database connetion
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@rentalshop-shard-00-00-t8ria.mongodb.net:27017,rentalshop-shard-00-01-t8ria.mongodb.net:27017,rentalshop-shard-00-02-t8ria.mongodb.net:27017/rentalShop?ssl=true&replicaSet=rentalShop-shard-0&authSource=admin&retryWrites=true`, {
  useNewUrlParser: true
}).catch((err) => {
  console.error(`database connection error: ${err}`);
  process.exit();
});


//auth for express/HTML routes with session
// const authenticates = {
//   required: function (req, res, next) {
//     if (req.user && req.user.email) {
//       return next();
//     } else {
//       res.redirect('/users/login');
//     }
//   },
//   optional: function (req, res, next) {
//     next();
//   },
// };


//Routes modules
const visitors = require('./routes/visitors');
const auth = require('./routes/auth');
const rental = require('./routes/rental');
const admin = require('./routes/admin');
//const users = require('./routes/users');
const api_rentalShop = require('./routes/api/api.rentalShop');


//initial express
var app = express();

app.use(cookieParser('rentalShop-secret'));
app.use(session({
  secret: "rentalShop",
  resave: "true",
  saveUninitialized: "true"
}));

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));


// view engine setup 
app.set('views', path.join(__dirname, 'views')),
  app.set('view engine', 'pug');
app.set('view options', {
  layout: true,
  include: true
});

app.use(express.static(path.join(__dirname, 'public')));

//Route Middleware
// app.use('/', visitors);
app.use('/auth', auth);
app.use('/api/rentalshop', api_rentalShop);
app.use('/rental', rental);
//app.use('/users', users);
app.use('/admin', admin);
app.use('/', express.static('../client/dist'));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).redirect('/404.html');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;