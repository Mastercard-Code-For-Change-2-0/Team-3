const User = require('../models/User');
const StudentProfile = require('../models/StudentProfile');
const VerificationRequest = require('../models/VerificationRequest');
const { sendVerificationEmail } = require('../services/emailService');

// @desc    Get pending verification requests
// @route   GET /api/clerk/verifications
// @access  Private (Clerk only)
exports.getPendingVerifications = async (req, res) => {
  try {
    const requests = await VerificationRequest.find({ status: 'pending' })
      .populate('student', 'email')
      .populate('profile');
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Process verification request
// @route   PUT /api/clerk/verify/:requestId
// @access  Private (Clerk only)
exports.verifyRequest = async (req, res) => {
  try {
    const { requestId } = req.params;
    const { status, comments, verificationFields } = req.body;

    const request = await VerificationRequest.findById(requestId);
    if (!request) {
      return res.status(404).json({ message: 'Verification request not found' });
    }

    // Update verification request
    request.status = status;
    request.comments = comments;
    request.verificationFields = verificationFields;
    request.verifiedBy = req.user._id;
    request.verificationDate = Date.now();
    await request.save();

    // Update student profile verification status
    const profile = await StudentProfile.findById(request.profile);
    profile.verificationStatus = status;
    profile.verificationComments = comments;
    profile.verifiedBy = req.user._id;
    profile.verificationDate = Date.now();
    await profile.save();

    // If verified, generate unique ID and update user
    if (status === 'verified') {
      const student = await User.findById(request.student);
      student.uniqueId = 'STU' + Date.now().toString().slice(-6);
      student.isVerified = true;
      await student.save();

      // Send verification email
      await sendVerificationEmail(student.email, student.uniqueId);
    }

    res.json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
