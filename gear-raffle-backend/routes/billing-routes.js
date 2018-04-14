// billingRoutes.js
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);



module.exports = app => {
  app.post('/api/stripe', (req, res) => {
    const token = req.body.stripeToken;
    
    const charge = stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: token
    });
    res.send("Post request for stripe");
  });
}