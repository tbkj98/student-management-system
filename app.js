const express = require('express');
const hbs     = require('hbs');
const app     = express();
const cookieParser = require('cookie-parser');
const home = require('./routers/home');
const login = require('./routers/login');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/layouts/partials');
app.use(cookieParser());
app.use(express.static('views/assets'));
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.set('view engine', 'hbs');

app.use('/', home);
app.use('/login', login);


// app.use((req, res, next) => {
//
//     if (req.cookies === undefined) {
//         let randomNumber = Math.random().toString();
//         randomNumber = randomNumber.substring(2, randomNumber.length);
//         res.cookies('cookieName', randomNumber, {maxAge:900000, httpOnly: true});
//
//         console.log('cookie settled successfully');
//     } else {
//         console.log(`Cookie already exists ${JSON.stringify(req.cookies, undefined, 2)}`);
//     }
//
//     next();
// });

/**
   Handling error 404 Page not found
*/

app.get('/*', (req, res) => {
   res.status(400);
   res.render(`layouts/pageNotFound.hbs`, {
       url: req.url,
       pageTitle: 'Page not found',
       styleSheetPath: '/css/index.css'
   });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});