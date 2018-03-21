const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('layouts/main.hbs', {
        pageTitle: 'Home - Student Portal HMR Institute of Technology and Management',
        styleSheetPath: '/css/index.css'
    });
});

module.exports = router;