const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//email faculty firstName group id lastName message phone specialty type year 
const CategorySchema = new Schema({
    email: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('Forms', FormsSchema);