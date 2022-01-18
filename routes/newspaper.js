const express = require('express');
const router = express.Router();

const NewsPaperController = require('../controllers/NewsPaperController');

// register newspaper company
router.post('/newspaper/register', NewsPaperController.registerCompany);



module.exports = router;