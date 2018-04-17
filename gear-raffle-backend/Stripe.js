// authRoutes.js
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
  if(!req.user) {
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

// -------------------------------------------------------------------



// https://api.stripe.com

// var stripe = require("stripe")(
//     "pk_test_bx1jjmYc4w9cTQV1TghATf3e"
//   );

// //handling errors
//   switch (err.type) {
//     case 'StripeCardError':
//       // A declined card error
//       err.message; // => e.g. "Your card's expiration year is invalid."
//       break;
//     case 'RateLimitError':
//       // Too many requests made to the API too quickly
//       break;
//     case 'StripeInvalidRequestError':
//       // Invalid parameters were supplied to Stripe's API
//       break;
//     case 'StripeAPIError':
//       // An error occurred internally with Stripe's API
//       break;
//     case 'StripeConnectionError':
//       // Some kind of error occurred during the HTTPS communication
//       break;
//     case 'StripeAuthenticationError':
//       // You probably used an incorrect API key
//       break;
//     default:
//       // Handle any other types of unexpected errors
//       break;
//   }

  
//   //expanding objects
//   var stripe = require("stripe")(
//     "sk_test_oWXSBNxeWYCiq7xQTGDVAKtq"
//   );
  
//   stripe.charges.retrieve("ch_1CFvAEHIe7OE6CgHsppxEjMy", {
//     expand: ["customer"]
//   });

//   //idempotent requests
//   var stripe = require("stripe")(
//     "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
//   );
  
//   stripe.charges.create({
//     amount: 2000,
//     currency: "usd",
//     source: "tok_visa", // obtained with Stripe.js
//     description: "Charge for addison.thompson@example.com"
//   }, {
//     idempotency_key: "rAD9ppc0rTAtqnsM"
//   }, function(err, charge) {
//     // asynchronously called
//   });


//   //metadata example request
//   var stripe = require("stripe")(
//     "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
//   );
  
//   stripe.charges.create({
//     amount: 2000,
//     currency: "usd",
//     source: "tok_mastercard", // obtained with Stripe.js
//     metadata: {'order_id': '6735'}
//   });


//   //PAGINATION EXAMPLE
//   var stripe = require("stripe")(
//     "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
//   );
  
//   stripe.customers.list(
//     { limit: 3 },
//     function(err, customers) {
//       // asynchronously called
//     }
//   );

//   //AUTO PAGINATION EXAMPLE
//   var stripe = require("stripe")(
//     "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
//   );
//   // Support for this directly in Stripe's Node library is forthcoming.

//   //VERSIONING
//   var stripe = require("stripe")(
//     "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
//   );
//   stripe.setApiVersion('2018-02-28');

//   //RETRIEVE BALANCE
//   var stripe = require("stripe")(
//     "sk_test_BQokikJOvBiI2HlWgH4olfQ2"
//   );
  
//   stripe.balance.retrieve(function(err, balance) {
//     // asynchronously called
//   });




