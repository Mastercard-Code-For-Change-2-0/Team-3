const DynamicField = require('../models/DynamicField');

// @desc    Add new dynamic field
// @route   POST /api/admin/fields
// @access  Private/Admin
exports.addDynamicField = async (req, res) => {
  try {
    const {
      name,
      label,
      type,
      options,
      required,
      section
    } = req.body;

    const field = await DynamicField.create({
      name,
      label,
      type,
      options,
      required,
      section,
      createdBy: req.user._id
    });

    res.status(201).json(field);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Update dynamic field
// @route   PUT /api/admin/fields/:fieldId
// @access  Private/Admin
exports.updateDynamicField = async (req, res) => {
  try {
    const field = await DynamicField.findByIdAndUpdate(
      req.params.fieldId,
      req.body,
      { new: true }
    );

    if (!field) {
      return res.status(404).json({ message: 'Field not found' });
    }

    res.json(field);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get all dynamic fields
// @route   GET /api/admin/fields
// @access  Private/Admin
exports.getDynamicFields = async (req, res) => {
  try {
    const fields = await DynamicField.find({}).sort('-createdAt');
    res.json(fields);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
