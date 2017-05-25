const mongoose = require('mongoose');
const foldersSchema = new moongose.Schema({
    name:{
        type: String
    }
});

module.exports = mongoose.model('Store', foldersSchema);