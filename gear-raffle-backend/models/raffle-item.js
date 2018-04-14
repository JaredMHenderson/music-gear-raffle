const mongoose =  require('mongoose');
module.exports = mongoose.model('raffleItems', new mongoose.Schema({
    imageUrl: {type: String, default: ''},
    itemName: { type: String, default: 'Instrument'},
    condition: {type: String},
    ticketPrice: { type: Number},
}));

