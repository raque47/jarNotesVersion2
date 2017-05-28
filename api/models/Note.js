const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    noteTitle:{
        type: String
    },
    noteContent:{
        type: String
    },
    tagsId:{
        type: Array
    },
    folderId: {
        type: String
    }
});

module.exports = mongoose.model('Note', notesSchema);