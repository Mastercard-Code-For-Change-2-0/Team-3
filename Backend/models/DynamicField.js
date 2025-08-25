const mongoose = require('mongoose');

const dynamicFieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'number', 'date', 'select', 'multiselect', 'file'],
    required: true
  },
  options: [{
    label: String,
    value: String
  }],
  required: {
    type: Boolean,
    default: false
  },
  section: {
    type: String,
    enum: ['personal', 'education', 'employment'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('DynamicField', dynamicFieldSchema);
