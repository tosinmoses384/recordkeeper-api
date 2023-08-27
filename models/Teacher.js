const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
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
    title: {
        type: String,
        required: [true, 'Please add title']
    },
    teacherNumber: {
        type: String,
        required: [true, 'Please add teacher number']
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Please add date of birth']
    },
    salary: {
        type: String
    },
    date: {
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model('Teacher', TeacherSchema);