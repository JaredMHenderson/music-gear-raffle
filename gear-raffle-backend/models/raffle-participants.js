const mongoose = require('mongoose');
module.exports = mongoose.model('raffleParticipants', new mongoose.Schema({
    participantName: { type: String, default: 'John' },
    participantEmail: { type: String }

}));
