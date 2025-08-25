const StudentProfile = require('../models/StudentProfile');
const User = require('../models/User');
const VerificationRequest = require('../models/VerificationRequest');

// @desc    Create or update student profile
// @route   POST /api/student/profile
// @access  Private (Student only)
exports.updateProfile = async (req, res) => {
  try {
    const {
      personalInfo,
      education,
      employment,
      batch,
      trainingPartner
    } = req.body;

    let profile = await StudentProfile.findOne({ user: req.user._id });

    if (profile) {
      // Update existing profile
      profile = await StudentProfile.findOneAndUpdate(
        { user: req.user._id },
        {
          personalInfo,
          education,
          employment,
          batch,
          trainingPartner,
          verificationStatus: 'pending' // Reset verification status on update
        },
        { new: true }
      );
    } else {
      // Create new profile
      profile = await StudentProfile.create({
        user: req.user._id,
        personalInfo,
        education,
        employment,
        batch,
        trainingPartner
      });
    }

    // Create or update verification request
    await VerificationRequest.findOneAndUpdate(
      { student: req.user._id },
      {
        student: req.user._id,
        profile: profile._id,
        status: 'pending'
      },
      { upsert: true, new: true }
    );

    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Get student profile
// @route   GET /api/student/profile
// @access  Private (Student only)
exports.getProfile = async (req, res) => {
  try {
    const profile = await StudentProfile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Upload documents
// @route   POST /api/student/documents
// @access  Private (Student only)
exports.uploadDocuments = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files uploaded' });
    }

    const profile = await StudentProfile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Add new documents
    const newDocuments = req.files.map(file => ({
      type: req.body.type,
      url: file.path,
      uploadDate: Date.now()
    }));

    profile.documents.push(...newDocuments);
    await profile.save();

    res.json(profile.documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
