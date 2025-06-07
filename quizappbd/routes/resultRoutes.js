const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/submit', authMiddleware, resultController.submitResult);

module.exports = router;
