const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please add first name']
    },
    surname: {
        type: String,
        required: [true, 'Please add surename']
    },
    nationalID: {
        type: String,
        required: [true, 'Please add national ID']
    },
    studentNumber: {
        type: String,
        required: [true, 'Please add student number']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please add date of birth']
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Student', StudentSchema);