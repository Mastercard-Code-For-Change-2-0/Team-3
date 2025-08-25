const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const { adminOnly } = require('../middlewares/roleMiddleware');
const { addDynamicField, updateDynamicField, getDynamicFields } = require('../controllers/adminController');

// All routes are protected and for admins only
router.use(protect, adminOnly);

// Dynamic fields management
router.post('/fields', addDynamicField);
router.put('/fields/:fieldId', updateDynamicField);
router.get('/fields', getDynamicFields);

module.exports = router;
