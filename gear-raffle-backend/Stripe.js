passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email'],
            prompt: 'select_account'
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/surveys');
        }
    );

    app.get(
        '/api/logout', (req, res) => {
            req.logout();
            res.redirect('/');
        }
    );

    app.get(
        '/api/current_user', (req, res) => {
            res.send(req.user);
        }
    );
}



// requireLogin.js
module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
}

//server.js
require('./models/User');
require('./models/Survey');
require('./services/passport');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

mongoose.connect(keys.mongooseURI);

const app = express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
// Tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like main.js or main.css
    app.use(express.static('client/build'));

    // Express will serve up index.html if it
    // doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT);