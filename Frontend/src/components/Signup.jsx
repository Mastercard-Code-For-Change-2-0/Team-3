import React, { useState } from "react";

const Signup = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    address: "",
    aadhaar: "",
    // Education
    tenthSchool: "",
    tenthBoard: "",
    tenthYear: "",
    tenthGpa: "",
    tenthPlace: "",
    twelfthCollege: "",
    twelfthBoard: "",
    twelfthYear: "",
    twelfthGpa: "",
    twelfthPlace: "",
    ugCollege: "",
    specialization: "",
    ugYear: "",
    ugGpa: "",
    ugPlace: "",
    // Family
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    guardianContact: "",
    familyIncome: "",
    // Placement
    batch: "",
    trainingPartner: "",
    jobRole: "",
    studentBatch: "",
    // Security
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Handle input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSendOtp = () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      setErrors({ ...errors, mobile: "Enter valid 10-digit mobile number" });
      return;
    }
    setOtpSent(true);
    alert("OTP Sent (demo only)");
  };

  const handleVerifyOtp = () => {
    if (formData.otp !== "1234") {
      setErrors({ ...errors, otp: "Invalid OTP (hint: use 1234 for demo)" });
      return;
    }
    setOtpVerified(true);
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.mobile || formData.mobile.length !== 10)
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.aadhaar || formData.aadhaar.length !== 12)
      newErrors.aadhaar = "Enter a valid 12-digit Aadhaar number";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!otpVerified) newErrors.otp = "Please verify your OTP";
    return newErrors;
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully 🎉");
      console.log("Final Data: ", formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Student Registration
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border p-3 rounded-lg w-full"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm">{errors.mobile}</p>
                )}
              </div>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              <input
                type="text"
                name="aadhaar"
                placeholder="Aadhaar Number"
                value={formData.aadhaar}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full"
              />
              {errors.aadhaar && (
                <p className="text-red-500 text-sm">{errors.aadhaar}</p>
              )}
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="border p-3 rounded-lg w-full md:col-span-2"
              />
            </div>
          </div>


          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Educational Details
            </h3>

            {/* 10th Details */}
            <h4 className="text-lg font-medium text-gray-700 mt-2">10th Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="tenthSchool" placeholder="School Name" value={formData.tenthSchool} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="tenthBoard" placeholder="Board" value={formData.tenthBoard} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="number" name="tenthYear" placeholder="Passing Year" value={formData.tenthYear} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="tenthGpa" placeholder="Percentage / GPA" value={formData.tenthGpa} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="tenthPlace" placeholder="Place" value={formData.tenthPlace} onChange={handleChange} className="border p-3 rounded-lg w-full md:col-span-2" />
            </div>

            {/* 12th Details */}
            <h4 className="text-lg font-medium text-gray-700 mt-6">12th Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="twelfthCollege" placeholder="College Name" value={formData.twelfthCollege} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="twelfthBoard" placeholder="Board" value={formData.twelfthBoard} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="number" name="twelfthYear" placeholder="Passing Year" value={formData.twelfthYear} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="twelfthGpa" placeholder="Percentage / GPA" value={formData.twelfthGpa} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="twelfthPlace" placeholder="Place" value={formData.twelfthPlace} onChange={handleChange} className="border p-3 rounded-lg w-full md:col-span-2" />
            </div>

            {/* UG Details */}
            <h4 className="text-lg font-medium text-gray-700 mt-6">College (UG) Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="ugCollege" placeholder="College / Institute" value={formData.ugCollege} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="number" name="ugYear" placeholder="Passing Year" value={formData.ugYear} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="ugGpa" placeholder="CGPA" value={formData.ugGpa} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="ugPlace" placeholder="Place" value={formData.ugPlace} onChange={handleChange} className="border p-3 rounded-lg w-full md:col-span-2" />
            </div>
          </div>


          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Family Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="fatherOccupation" placeholder="Father's Occupation" value={formData.fatherOccupation} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="motherOccupation" placeholder="Mother's Occupation" value={formData.motherOccupation} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="guardianContact" placeholder="Guardian Contact" value={formData.guardianContact} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="familyIncome" placeholder="Family Income" value={formData.familyIncome} onChange={handleChange} className="border p-3 rounded-lg w-full" />
            </div>
          </div>

          {/* ================= PLACEMENT DETAILS ================= */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Placement Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="batch" placeholder="Batch" value={formData.batch} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="trainingPartner" placeholder="Training Partner (Company)" value={formData.trainingPartner} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="jobRole" placeholder="Job Role" value={formData.jobRole} onChange={handleChange} className="border p-3 rounded-lg w-full" />
              <input type="text" name="studentBatch" placeholder="Student Batch" value={formData.studentBatch} onChange={handleChange} className="border p-3 rounded-lg w-full" />
            </div>
          </div>


          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              OTP Verification
            </h3>
            <div className="flex gap-4 items-center">
              <input type="text" name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} className="border p-3 rounded-lg flex-1" />
              {!otpSent ? (
                <button type="button" onClick={handleSendOtp} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Send OTP</button>
              ) : (
                <button type="button" onClick={handleVerifyOtp} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Verify OTP</button>
              )}
            </div>
            {errors.otp && <p className="text-red-500 text-sm mt-2">{errors.otp}</p>}
            {otpVerified && <p className="text-green-600 mt-2 font-medium">✅ OTP Verified Successfully</p>}
          </div>


          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Account Security
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-3 rounded-lg w-full" />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="border p-3 rounded-lg w-full" />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
            </div>
          </div>


          <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;