const express = require('express');
const router = express.Router();
const testController = require('../controllers/testController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, testController.createTest);
router.get('/all', testController.getAllTests);

module.exports = router;
