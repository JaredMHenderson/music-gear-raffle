const express = require('express');
const mongoose = require('mongoose');
const app = express();
const admin = require('firebase-admin');
const firebase = require('firebase');
app.use(express.static('./build'))
const bodyParser = require('body-parser');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/raffleItems';
const port = process.env.PORT || 3000;


mongoose.connect(MONGODB_URI).then(
    () => {
        app.listen(port, (err) => {
            if (err) {
                log(err)
            } else {
                // Initialize Firebase
                var config = {
                    apiKey: "AIzaSyAyPlniB3dWGNGbj6WQry2K3aBh8c5Ycqw",
                    authDomain: "music-gear-raffle.firebaseapp.com",
                    databaseURL: "https://music-gear-raffle.firebaseio.com",
                    projectId: "music-gear-raffle",
                    storageBucket: "music-gear-raffle.appspot.com",
                    messagingSenderId: "12287784229"
                };
                firebase.initializeApp(config);
                console.log(`app is listening on port: ${port}`);

            }
        });
        console.log('connected to mongo server');
    },
    err => {
        console.log(err);

    }
);


app.use(bodyParser.json());
app.use(express.static('./build'));

require('./routes/billing-routes')(app);
require('./routes/routes')(app);
require('./routes/authroutes')(app, firebase);





app.get('/', (req, res) => {
    res.sendFile('./build/index.html');
})






