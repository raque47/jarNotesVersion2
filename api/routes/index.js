const express = require('express');
const router = express.Router();
const noteAPI =  require('../controllers/notesController');
const tagController =  require('../controllers/tagsController');
// const folderontroller =  require('../controllers/tagsController');

router.get('/notes', noteAPI.getNotes);
router.post('/notes', noteAPI.addNote);
router.put('/notes', noteAPI.updateNote);

router.get('/tags', tagController.getTags);
router.post('/tags', tagController.addTag);
// router.put('/tags', tagController.updateTag);


// router.get('/folders', noteAPI.getNotes);
// router.post('/folders', noteAPI.addNote);
// router.put('/folders', noteAPI.updateNote);
module.exports = router;