const express = require('express');
const router = express.Router();
const { createClass, getAllClasses, getClassDetail } = require('../controllers/classController');
const auth = require('../middleware/authMiddleware');

// Create a class (protected route)
router.post('/classes', auth, createClass);

// Get all classes (optionally protected if you want only authenticated users)
router.get('/classes', auth, getAllClasses);

// Get class details by class ID (protected route)
router.get('/classes/:classId', auth, getClassDetail);

module.exports = router;
