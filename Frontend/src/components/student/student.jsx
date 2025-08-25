import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function Student() {
  const {
    userData,
    handleInputChange,
    handleSaveProfile,
  } = useOutletContext() || {};
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setIsEditing((v) => !v)}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          {isEditing ? "Stop Editing" : "Edit"}
        </button>
        <button
          onClick={handleSaveProfile}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={!isEditing}
        >
          Save
        </button>
      </div>

      {/* Personal Details */}
      <div className="border p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Personal Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input disabled={!isEditing} type="text" name="fullName" value={userData?.fullName || ""} onChange={handleInputChange} placeholder="Full Name" className="border p-2 rounded" />
          <input disabled={!isEditing} type="email" name="email" value={userData?.email || ""} onChange={handleInputChange} placeholder="Email" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="mobile" value={userData?.mobile || ""} onChange={handleInputChange} placeholder="Mobile Number" className="border p-2 rounded" />
          <input disabled={!isEditing} type="date" name="dob" value={userData?.dob || ""} onChange={handleInputChange} className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="aadhaar" value={userData?.aadhaar || ""} onChange={handleInputChange} placeholder="Aadhaar Number" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="address" value={userData?.address || ""} onChange={handleInputChange} placeholder="Address" className="border p-2 rounded col-span-2" />
        </div>
      </div>

      {/* Educational Details */}
      <div className="border p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Educational Details</h3>
        <p className="font-semibold">10th Details</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input disabled={!isEditing} type="text" name="tenthSchool" value={userData?.tenthSchool || ""} onChange={handleInputChange} placeholder="School Name" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="tenthBoard" value={userData?.tenthBoard || ""} onChange={handleInputChange} placeholder="Board" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="tenthYear" value={userData?.tenthYear || ""} onChange={handleInputChange} placeholder="Passing Year" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="tenthPercent" value={userData?.tenthPercent || ""} onChange={handleInputChange} placeholder="Percentage" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="tenthPlace" value={userData?.tenthPlace || ""} onChange={handleInputChange} placeholder="Place" className="border p-2 rounded" />
        </div>

        <p className="font-semibold">12th Details</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input disabled={!isEditing} type="text" name="twelfthSchool" value={userData?.twelfthSchool || ""} onChange={handleInputChange} placeholder="School Name" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="twelfthBoard" value={userData?.twelfthBoard || ""} onChange={handleInputChange} placeholder="Board" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="twelfthYear" value={userData?.twelfthYear || ""} onChange={handleInputChange} placeholder="Passing Year" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="twelfthPercent" value={userData?.twelfthPercent || ""} onChange={handleInputChange} placeholder="Percentage" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="twelfthPlace" value={userData?.twelfthPlace || ""} onChange={handleInputChange} placeholder="Place" className="border p-2 rounded" />
        </div>
      </div>

      {/* College UG Details */}
      <div className="border p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-2">College UG Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input disabled={!isEditing} type="text" name="collegeName" value={userData?.collegeName || ""} onChange={handleInputChange} placeholder="College Name" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="specialization" value={userData?.specialization || ""} onChange={handleInputChange} placeholder="Specialization" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="collegeYear" value={userData?.collegeYear || ""} onChange={handleInputChange} placeholder="Passing Year" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="cgpa" value={userData?.cgpa || ""} onChange={handleInputChange} placeholder="CGPA" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="collegePlace" value={userData?.collegePlace || ""} onChange={handleInputChange} placeholder="Place" className="border p-2 rounded" />
        </div>
      </div>

      {/* Family Details */}
      <div className="border p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Family Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input disabled={!isEditing} type="text" name="fatherName" value={userData?.fatherName || ""} onChange={handleInputChange} placeholder="Father's Name" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="fatherOccupation" value={userData?.fatherOccupation || ""} onChange={handleInputChange} placeholder="Father's Occupation" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="fatherContact" value={userData?.fatherContact || ""} onChange={handleInputChange} placeholder="Father's Contact" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="motherName" value={userData?.motherName || ""} onChange={handleInputChange} placeholder="Mother's Name" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="motherOccupation" value={userData?.motherOccupation || ""} onChange={handleInputChange} placeholder="Mother's Occupation" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="motherContact" value={userData?.motherContact || ""} onChange={handleInputChange} placeholder="Mother's Contact" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="familyIncome" value={userData?.familyIncome || ""} onChange={handleInputChange} placeholder="Family Income" className="border p-2 rounded" />
        </div>
      </div>

      {/* Placement Details */}
      <div className="border p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-2">Placement Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <input disabled={!isEditing} type="text" name="batch" value={userData?.batch || ""} onChange={handleInputChange} placeholder="Batch" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="trainingCompany" value={userData?.trainingCompany || ""} onChange={handleInputChange} placeholder="Training Company" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="jobRole" value={userData?.jobRole || ""} onChange={handleInputChange} placeholder="Job Role" className="border p-2 rounded" />
          <input disabled={!isEditing} type="text" name="studentBranch" value={userData?.studentBranch || ""} onChange={handleInputChange} placeholder="Student Branch" className="border p-2 rounded" />
        </div>
      </div>
    </div>
  );
}


