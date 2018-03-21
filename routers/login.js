const express = require('express');
const router = express.Router();
const db = require('../db/database');
const bodyParser = require('body-parser');



let urlEncodedParser = bodyParser.urlencoded({extended:false});

router.post('/user',urlEncodedParser,  (req, res) => {
    db.find({email: req.body.email, password: req.body.password}, (result) => {

        if (result !== 'error' && result.length > 0 ) {
            res.render('layouts/landingPage.hbs', {
                pageTitle : 'Welcome - ' + result[0].name,
                styleSheetPath : '/css/index.css',
                styleSheetTwoPath : '/css/user.css'
            })
        } else {
            res.send('Email or Password incorrect');
        }
    });
});

router.get('/', (req, res) => {
    res.redirect('/');
});

module.exports = router;