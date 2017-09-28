var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 15,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {User};
