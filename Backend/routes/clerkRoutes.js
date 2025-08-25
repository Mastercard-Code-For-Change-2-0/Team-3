const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { clerkOnly } = require('../middlewares/roleMiddleware');
const { 
  getPendingVerifications, 
  verifyRequest 
} = require('../controllers/clerkController');

// All routes are protected and for clerks only
router.use(protect, clerkOnly);

// Get all pending verifications
router.get('/verifications', getPendingVerifications);

// Process a verification request
router.put('/verify/:requestId', verifyRequest);

module.exports = router;
