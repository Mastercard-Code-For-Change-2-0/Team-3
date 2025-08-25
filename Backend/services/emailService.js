const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Add error handling and logging
transporter.verify(function(error, success) {
  if (error) {
    console.log("SMTP Server error:", error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});

const sendVerificationEmail = async (email, userId, verificationToken) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Account Verification',
      html: `
        <h2>Verify Your Account</h2>
        <p>Your User ID is: <strong>${userId}</strong></p>
        <p>Please click the link below to verify your account:</p>
        <a href="${process.env.BASE_URL}/api/auth/verify/${verificationToken}">Verify Account</a>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

module.exports = { sendVerificationEmail };