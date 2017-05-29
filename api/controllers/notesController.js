const mongoose = require('mongoose');
const Note = require('../models/Note');


// get Notes
function getNotes(req, res) {
    Note.find().exec(function (err, data) {
        if (!err) {
            res.status(200);
            res.json(data);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
};

//post Note
function addNote(req, res) {
    const note = new Note(req.body);
    note.save(err => {
        if (!err) {
            res.status(201);
            res.json(note);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}

//put Note
function updateNote(req, res) {
    console.log("UPPPPDATEEEEE!!!");
    const note = new Note(req.body);
   // console.log("this is the body" + req.body);
    note.update(err => {
        if (!err) {
            res.status(201);
            res.json(note);
        }
        else {
            res.status(404);
            res.json(err);
        }
    });
}

//delete Note
function deleteNote (req, res) {
    console.log('Deleteeee')
    note.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    }
    else {
      res.status(500).json({});
    }
  });
};

const actions = {
    getNotes,
    addNote,
    updateNote,
    deleteNote
}

module.exports = actions;




//:puerto/api/notes/