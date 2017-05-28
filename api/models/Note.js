const mongoose = require('mongoose');

const notesSchema = new moongose.Schema({
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

module.exports = mongoose.model('Store', notesSchema);