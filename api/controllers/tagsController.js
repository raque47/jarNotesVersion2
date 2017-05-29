const mongoose = require('mongoose');
const Tag = require('../models/Tag');

// get Tags
exports.getTags = (req, res) => {
  console.log('get tagss!!');
  Tag.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};


//post Tag
exports.addTag = (req, res) => {
  console.log('Create tag');
  const tag = new Tag(req.body);
  tag.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(tag);
    }
  });
};

