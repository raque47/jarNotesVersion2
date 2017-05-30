const mongoose = require('mongoose');
const Folder = require('../models/Folder');


// get Folders
exports.getFolders = (req, res) => {
  console.log('get folderss!!');
  Folder.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

//post Folder
exports.addFolder = (req, res) => {
  console.log('Post: Create folder!!');
  const folder = new Folder(req.body);
  folder.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(folder);
    }
  });
};