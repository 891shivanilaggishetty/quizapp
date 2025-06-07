const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, questionController.addQuestion);

module.exports = router;
