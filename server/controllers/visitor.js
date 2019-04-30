//visitor/Controller

/*  GEt my landing page' */
exports.getLandingPage = function (req, res) {
    res.render('index.pug', {
        title: 'Landing page'
    });
};

/* GET contact page. */
exports.getContactForm = function (req, res) {
    res.render('contact.pug');

};

/* post contact page. */
exports.postContactForm = function (req, res) {
    var formData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        subject: req.body.subject
    };
    app.locals.formData.push(formData);
    res.redirect('/thanks');
};

// /* GET a bout page. */
exports.getThanks = function (req, res) {
    userInfo = req.app.locals.formData;
    res.render('thanks.pug');

};

// /* GET a bout page. */
exports.getAbout = function (req, res) {
    res.render('about.pug');
};