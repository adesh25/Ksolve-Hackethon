const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    discussions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

module.exports = mongoose.model('Session', sessionSchema);
