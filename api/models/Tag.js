const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'The tag must have a name'
    },
});

module.exports = mongoose.model('tagSchema', tagSchema);