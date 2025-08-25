import React, { useState } from "react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Edit Profile");


  const [userData, setUserData] = useState({
    // Personal Details
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    aadhaar: "",
    address: "",

    // Educational - 10th
    tenthSchool: "",
    tenthBoard: "",
    tenthYear: "",
    tenthPercent: "",
    tenthPlace: "",

    // Educational - 12th
    twelfthSchool: "",
    twelfthBoard: "",
    twelfthYear: "",
    twelfthPercent: "",
    twelfthPlace: "",

    // College UG
    collegeName: "",
    specialization: "",
    collegeYear: "",
    cgpa: "",
    collegePlace: "",

    // Family Details
    fatherName: "",
    fatherOccupation: "",
    fatherContact: "",
    motherName: "",
    motherOccupation: "",
    motherContact: "",
    familyIncome: "",

    // Placement Details
    batch: "",
    trainingCompany: "",
    jobRole: "",
    studentBranch: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSaveProfile = () => {
    alert("Profile Updated Successfully!");
    console.log(userData);
  };

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSavePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and Confirm password do not match!");
    } else {
      alert("Password Changed Successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }
  };

  
  const renderContent = () => {
    switch (activeSection) {
      case "Edit Profile":
        return (
          <div className="p-6 overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

            {/* Personal Details */}
            <div className="border p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">Personal Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="fullName" value={userData.fullName} onChange={handleInputChange} placeholder="Full Name" className="border p-2 rounded" />
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="Email" className="border p-2 rounded" />
                <input type="text" name="mobile" value={userData.mobile} onChange={handleInputChange} placeholder="Mobile Number" className="border p-2 rounded" />
                <input type="date" name="dob" value={userData.dob} onChange={handleInputChange} className="border p-2 rounded" />
                <input type="text" name="aadhaar" value={userData.aadhaar} onChange={handleInputChange} placeholder="Aadhaar Number" className="border p-2 rounded" />
                <input type="text" name="address" value={userData.address} onChange={handleInputChange} placeholder="Address" className="border p-2 rounded col-span-2" />
              </div>
            </div>

            {/* Educational Details */}
            <div className="border p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">Educational Details</h3>
              <p className="font-semibold">10th Details</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" name="tenthSchool" value={userData.tenthSchool} onChange={handleInputChange} placeholder="School Name" className="border p-2 rounded" />
                <input type="text" name="tenthBoard" value={userData.tenthBoard} onChange={handleInputChange} placeholder="Board" className="border p-2 rounded" />
                <input type="text" name="tenthYear" value={userData.tenthYear} onChange={handleInputChange} placeholder="Passing Year" className="border p-2 rounded" />
                <input type="text" name="tenthPercent" value={userData.tenthPercent} onChange={handleInputChange} placeholder="Percentage" className="border p-2 rounded" />
                <input type="text" name="tenthPlace" value={userData.tenthPlace} onChange={handleInputChange} placeholder="Place" className="border p-2 rounded" />
              </div>

              <p className="font-semibold">12th Details</p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" name="twelfthSchool" value={userData.twelfthSchool} onChange={handleInputChange} placeholder="School Name" className="border p-2 rounded" />
                <input type="text" name="twelfthBoard" value={userData.twelfthBoard} onChange={handleInputChange} placeholder="Board" className="border p-2 rounded" />
                <input type="text" name="twelfthYear" value={userData.twelfthYear} onChange={handleInputChange} placeholder="Passing Year" className="border p-2 rounded" />
                <input type="text" name="twelfthPercent" value={userData.twelfthPercent} onChange={handleInputChange} placeholder="Percentage" className="border p-2 rounded" />
                <input type="text" name="twelfthPlace" value={userData.twelfthPlace} onChange={handleInputChange} placeholder="Place" className="border p-2 rounded" />
              </div>
            </div>

            {/* College UG Details */}
            <div className="border p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">College UG Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="collegeName" value={userData.collegeName} onChange={handleInputChange} placeholder="College Name" className="border p-2 rounded" />
                <input type="text" name="specialization" value={userData.specialization} onChange={handleInputChange} placeholder="Specialization" className="border p-2 rounded" />
                <input type="text" name="collegeYear" value={userData.collegeYear} onChange={handleInputChange} placeholder="Passing Year" className="border p-2 rounded" />
                <input type="text" name="cgpa" value={userData.cgpa} onChange={handleInputChange} placeholder="CGPA" className="border p-2 rounded" />
                <input type="text" name="collegePlace" value={userData.collegePlace} onChange={handleInputChange} placeholder="Place" className="border p-2 rounded" />
              </div>
            </div>

            {/* Family Details */}
            <div className="border p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">Family Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="fatherName" value={userData.fatherName} onChange={handleInputChange} placeholder="Father's Name" className="border p-2 rounded" />
                <input type="text" name="fatherOccupation" value={userData.fatherOccupation} onChange={handleInputChange} placeholder="Father's Occupation" className="border p-2 rounded" />
                <input type="text" name="fatherContact" value={userData.fatherContact} onChange={handleInputChange} placeholder="Father's Contact" className="border p-2 rounded" />
                <input type="text" name="motherName" value={userData.motherName} onChange={handleInputChange} placeholder="Mother's Name" className="border p-2 rounded" />
                <input type="text" name="motherOccupation" value={userData.motherOccupation} onChange={handleInputChange} placeholder="Mother's Occupation" className="border p-2 rounded" />
                <input type="text" name="motherContact" value={userData.motherContact} onChange={handleInputChange} placeholder="Mother's Contact" className="border p-2 rounded" />
                <input type="text" name="familyIncome" value={userData.familyIncome} onChange={handleInputChange} placeholder="Family Income" className="border p-2 rounded" />
              </div>
            </div>

            {/* Placement Details */}
            <div className="border p-4 rounded-lg mb-6">
              <h3 className="text-lg font-bold mb-2">Placement Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="batch" value={userData.batch} onChange={handleInputChange} placeholder="Batch" className="border p-2 rounded" />
                <input type="text" name="trainingCompany" value={userData.trainingCompany} onChange={handleInputChange} placeholder="Training Company" className="border p-2 rounded" />
                <input type="text" name="jobRole" value={userData.jobRole} onChange={handleInputChange} placeholder="Job Role" className="border p-2 rounded" />
                <input type="text" name="studentBranch" value={userData.studentBranch} onChange={handleInputChange} placeholder="Student Branch" className="border p-2 rounded" />
              </div>
            </div>

            {/* Save Button */}
            <button
              type="button"
              onClick={handleSaveProfile}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Save Profile
            </button>
          </div>
        );

      case "Change Password":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
            <form className="space-y-4">
              <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordChange} placeholder="Current Password" className="border p-2 rounded w-full" />
              <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} placeholder="New Password" className="border p-2 rounded w-full" />
              <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} placeholder="Confirm Password" className="border p-2 rounded w-full" />
              <button type="button" onClick={handleSavePassword} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Update Password
              </button>
            </form>
          </div>
        );

      case "Communication":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Communication</h2>
            <p className="text-gray-600">Here you can manage communication preferences or messages.</p>
          </div>
        );

      case "Log Out":
        return (
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Log Out</h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Log Out</button>
          </div>
        );

      case "Delete Account":
        return (
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Delete Account</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to delete your account?</p>
            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Delete Account</button>
          </div>
        );

      case "Deactivate Account":
        return (
          <div className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Deactivate Account</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to deactivate your account?</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Deactivate Account</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-4 text-center font-bold text-xl border-b border-blue-700">Student Dashboard</div>
        <nav className="flex-1 p-4 space-y-4">
          {["Edit Profile", "Change Password", "Communication", "Log Out", "Delete Account", "Deactivate Account"].map(
            (section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`block w-full text-left px-4 py-2 rounded ${
                  activeSection === section ? "bg-blue-600" : "hover:bg-blue-700"
                }`}
              >
                {section}
              </button>
            )
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white shadow-md m-4 rounded-lg overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default Dashboard;