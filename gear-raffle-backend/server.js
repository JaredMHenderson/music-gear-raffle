const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('./build'))
var bodyParser = require('body-parser');


const port = 3000;


mongoose.connect('mongodb://localhost/raffleItems').then(
    () => {
        app.listen(port, (err) => {
            if (err) {
                log(err)
            } else {
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


require('./routes/billing-routes')(app);
require('./routes/routes')(app);




app.get('/', (req, res) => {
    res.sendFile('./build/index.html');
})
