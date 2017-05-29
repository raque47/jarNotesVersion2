const mongoose = require('mongoose');
const folderSchema = new moongose.Schema({
    name:{
        type: String,
        required: "The folder must have a name."
    }
});

module.exports = mongoose.model('folderSchema', folderSchema);