const mongoose = require('mongoose');
const folderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "The folder must have a name."
    }
});

module.exports = mongoose.model('Folder', folderSchema);