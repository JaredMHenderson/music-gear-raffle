const mongoose = require('mongoose');

module.exports = mongoose.model('raffleItems', new mongoose.Schema({
    imageUrl: { type: String, default: '' },
    itemName: { type: String, default: 'Instrument' },
    condition: { type: String },
    ticketPrice: { type: Number },
    minimumTickets: { type: Number },
    raffleStartDate: { type: Date },
    raffleEndDate: { type: Date },
    participants: [{
      email: {type: String}
    }],
    raffleDone: {type: Boolean, default: false},
    deleted: {type: Boolean, default: false}
}));
