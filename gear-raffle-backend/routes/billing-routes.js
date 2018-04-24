const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);



module.exports = app => {
    app.post('/api/stripe', (req, res) => {
        console.log("stripe route");
        // console.log('Here is our body',req.body);
        console.log(req.body);
        //
        // res.sendStatus(200);
        // const token = req.body.token;
        const charge = stripe.charges.create({
            amount: req.body.price,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        }).then((data) => {
            console.log('Do we have data.........', data);
            // res.sendStatus('',200);

        }).catch(err => err);
        // console.log(charge);
    });
}