const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title: { type: String, required: true },
    units: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Unit' }],
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Class', classSchema);
