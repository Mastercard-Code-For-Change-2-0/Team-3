const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true
  },
  institution: {
    type: String,
    required: true
  },
  startYear: {
    type: Number,
    required: true
  },
  endYear: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  documents: [{
    type: String  // URLs to stored documents
  }]
});

const employmentSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  jobRole: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: Date,
  isCurrentJob: {
    type: Boolean,
    default: false
  },
  salary: {
    type: Number
  },
  location: String,
  documents: [{
    type: String  // URLs to stored documents
  }]
});

const studentProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  personalInfo: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      street: String,
      city: String,
      state: String,
      pincode: String,
      country: String
    }
  },
  education: [educationSchema],
  employment: [employmentSchema],
  batch: {
    type: String,
    required: true
  },
  trainingPartner: String,
  placementStatus: {
    type: String,
    enum: ['placed', 'unplaced', 'dropout'],
    default: 'unplaced'
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending'
  },
  verifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  verificationDate: Date,
  verificationComments: String,
  consentProvided: {
    type: Boolean,
    default: false
  },
  consentDate: Date,
  documents: [{
    type: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    uploadDate: {
      type: Date,
      default: Date.now
    },
    verified: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('StudentProfile', studentProfileSchema);
