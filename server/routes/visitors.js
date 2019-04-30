//visitors.js
const path = require('path');
const express = require('express');
const visitorController = require('../controllers/visitor');
const visitorRouter = express.Router();



/* GET index page. */
visitorRouter.get('/', visitorController.getLandingPage);

/* GET contact page. */
visitorRouter.get('/contact', visitorController.getContactForm);

/* post contact page. */
visitorRouter.post('/contact', visitorController.postContactForm);

/* GET a thank you page. */
visitorRouter.get('/thanks', visitorController.getThanks);

/* GET about page. */
visitorRouter.get('/about', visitorController.getAbout);



module.exports = visitorRouter;