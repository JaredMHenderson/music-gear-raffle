var admin = require('firebase-admin');
const RaffleItem = require('../models/raffle-item')

module.exports = (app) => {
    app.get('/api/raffle-items', (req, res) => {
        RaffleItem.find({}, (err, raffleItems) => {
            if (err) {
                res.status(500).json((err));
            } else {
                res.status(201).json(raffleItems);
            }
        });

    });
    app.get('/api/raffleItem/:id', (req, res) => {
        RaffleItem.find({ _id: req.params.id }, (err, raffleItem) => {
            if (err) {
                res.status(500).json((err));
            } else {
                res.status(201).json(raffleItem);
            }
        });

    });
    app.post('/api/raffleItem', (req, res) => {
        (new RaffleItem(req.body)).save((err, raffleItem) => {
            if (err) {
                res.status(500).json((err));
            } else {
                res.status(201).json(raffleItem);
            }

        });
    });

    app.post('/api/raffleItem/participant/:id', (req, res) => {

      const { name, email, ticketNumber } = req.body;
       RaffleItem.findOneAndUpdate({ _id: req.params.id }, {$push: {participants: {email: email}}}, (err, record) => {
        if(err) {
          console.log(err)
        }
        else {
          console.log(record);
          res.json(record);
        }
      });
    });
    //
    // app.post('/api/raffleItem/participant/:id', (req, res) => {
    // function arrayBuilder(obj, ticketNumber) {
    //     const results = [];
    //     for(let i = 0; i < ticketNumber; i++) {
    //       results.push(obj);
    //     }
    //     return results;
    //   }
    //   const { name, email, ticketNumber } = req.body;
    //    RaffleItem.findOneAndUpdate({ _id: req.params.id }, {$push: {participants: ...arrayBuilder({name, email}, ticketNumber)}}, (err, record) => {
    //     if(err) {
    //       console.log(err)
    //     }
    //     else {
    //       console.log(record);
    //       res.json(record);
    //     }
    //   });
    // });

    app.put('/api/raffleItem/:id', (req, res) => {
        RaffleItem.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, raffleItem) => {
            if (err) {
                res.status(500).json((err));
            } else {
                res.status(201).json(raffleItem);
            }
        });
    });

    app.delete('/api/raffleItem/:id', (req, res) => {
        RaffleItem.findOneAndRemove({ _id: req.params.id }, req.body, { new: true }, (err, raffleItem) => {
            if (err) {
                res.status(500).json((err));
            } else {
                res.status(201).json(raffleItem);
            }
        });
        res.end('Request received: delete - api/raffleItem/:id');
    });

    
      

}
