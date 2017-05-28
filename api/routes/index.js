const express = require('express');
const router = express.Router();

const noteAPI =  require('../controllers/notesController');



router.get('/notes', noteAPI.getNotes);
router.post('/notes', noteAPI.addNote);

module.exports = router;