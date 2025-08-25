import { useState } from "react"

const studentData = {
  // Basic Profile
  firstName: "Alex",
  middleName: "Michael",
  surname: "Johnson",
  studentName: "Alex Johnson",
  aadhaar: "1234-5678-9012",
  nameAsPerAadhaar: "Alex Michael Johnson",
  prn: "PRN2024001",
  gender: "Male",
  email: "alex.johnson@university.edu",
  phone: "+1 (555) 123-4567",
  panCard: "ABCDE1234F",
  jeeMerit: "12345",

  // Personal Details
  bloodGroup: "O+",
  maritalStatus: "Single",
  dateOfBirth: "1999-05-15",
  placeOfBirth: "New York, NY",
  height: "5'10\"",
  weight: "70 kg",
  religion: "Christianity",
  category: "General",
  caste: "N/A",
  emergencyMobile: "+1 (555) 987-6543",
  studentEmailId: "alex.johnson@university.edu",

  // Parents Details
  semaiId: "SEM001",
  parentContactNo: "+1 (555) 111-2222",
  parentMobile: "+1 (555) 333-4444",
  fatherName: "Robert Johnson",
  motherName: "Sarah Johnson",
  fatherOccupation: "Software Engineer",
  motherOccupation: "Teacher",

  // Permanent Address
  permanentAddress: "123 Main Street",
  permanentCity: "New York",
  permanentState: "NY",
  permanentPincode: "10001",

  // Current Address
  currentAddress: "456 University Ave",
  currentCity: "College Town",
  currentState: "ST",
  currentPincode: "12345",

  // Local Guardian Details
  guardianName: "John Smith",
  guardianAddress: "789 Guardian Lane, College Town, ST 12345",
  guardianRelation: "Uncle",
  guardianCellNo: "+1 (555) 555-6666",

  // Other Details
  tenthSchoolName: "Central High School",
  twelfthPassingYear: "2021",
  twelfthSchoolName: "State Senior Secondary School",
  vehicleType: "Motorcycle",
  vehicleRegistrationNo: "NY-123-ABC",

  // Bank Details
  accountHolderName: "Alex Johnson",
  bankAccountNumber: "1234567890123456",
  bankName: "State Bank of America",
  ifscCode: "SBOA0001234",

  // Existing fields
  studentId: "STU-2024-001",
  major: "Computer Science",
  year: "Junior",
  gpa: 3.85,
  creditsEarned: 78,
  creditsRequired: 120,
  profileImage: "/professional-student-headshot.png",
  highestQualification: "High School Diploma",
  collegeInstitute: "State University",
  specialization: "Computer Science",
  passingYear: "2026",
  tenthGpa: "9.2",
  twelfthGpa: "8.8",
  ugGpa: "3.85",
  guardianContact: "+1 (555) 987-6543",
  familyIncome: "$75,000",
  batch: "2024-CS-A",
  trainingPartner: "Tech Solutions Inc.",
  jobRole: "Software Developer Intern",
  studentBatch: "Batch 2024",
}

const mockMessages = [
  { id: 1, from: "Dr. Smith", subject: "Assignment Feedback", time: "2 hours ago", unread: true },
  { id: 2, from: "Academic Advisor", subject: "Course Registration", time: "1 day ago", unread: false },
  { id: 3, from: "Library Services", subject: "Book Return Reminder", time: "3 days ago", unread: false },
]

const mockAnnouncements = [
  { id: 1, title: "Final Exam Schedule Released", date: "2024-12-01", priority: "high" },
  { id: 2, title: "Spring Registration Opens", date: "2024-11-15", priority: "medium" },
  { id: 3, title: "Campus Maintenance Notice", date: "2024-11-10", priority: "low" },
]

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [formData, setFormData] = useState(studentData)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value })
  }

  const handleSaveProfile = () => {
    alert("Profile updated successfully!")
  }

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!")
      return
    }
    alert("Password changed successfully!")
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" })
  }

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      alert("Logged out successfully!")
    }
  }

  const handleDeactivateAccount = () => {
    if (confirm("Are you sure you want to deactivate your account? This action can be reversed.")) {
      alert("Account deactivated successfully!")
    }
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone!")) {
      alert("Account deletion initiated. You will receive a confirmation email.")
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-64 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={studentData.profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700 font-medium">{studentData.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-800 border-r border-slate-700 flex-shrink-0">
          <nav className="p-4">
            <ul className="space-y-2">
              {[
                { id: "overview", label: "Dashboard Overview", icon: "📊" },
                { id: "profile", label: "Profile Management", icon: "👤" },
                { id: "communication", label: "Communication", icon: "💬" },
                { id: "settings", label: "Account Settings", icon: "⚙️" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Welcome back, {studentData.name}!</h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Current GPA</h3>
                  <p className="text-3xl font-bold text-blue-600">{studentData.gpa}</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Credits Earned</h3>
                  <p className="text-3xl font-bold text-blue-600">
                    {studentData.creditsEarned}/{studentData.creditsRequired}
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Academic Year</h3>
                  <p className="text-3xl font-bold text-blue-600">{studentData.year}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Messages</h3>
                <div className="space-y-3">
                  {mockMessages.slice(0, 3).map((message) => (
                    <div key={message.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${message.unread ? "bg-blue-500" : "bg-gray-300"}`}></div>
                        <div>
                          <p className="font-medium text-gray-900">{message.from}</p>
                          <p className="text-sm text-gray-600">{message.subject}</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{message.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Profile Management</h2>

              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-6 mb-6">
                  <img
                    src={formData.profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{formData.studentName}</h3>
                    <p className="text-gray-600">Student ID: {formData.studentId}</p>
                    <p className="text-gray-600">PRN: {formData.prn}</p>
                  </div>
                </div>

                {/* Basic Profile Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Basic Profile</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name</label>
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Surname</label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar No</label>
                      <input
                        type="text"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name as per Aadhaar Card</label>
                      <input
                        type="text"
                        name="nameAsPerAadhaar"
                        value={formData.nameAsPerAadhaar}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PRN</label>
                      <input
                        type="text"
                        name="prn"
                        value={formData.prn}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile No</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">PAN Card No</label>
                      <input
                        type="text"
                        name="panCard"
                        value={formData.panCard}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Details Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Personal Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Blood Group</label>
                      <select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
                      <select
                        name="maritalStatus"
                        value={formData.maritalStatus}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Place of Birth</label>
                      <input
                        type="text"
                        name="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                      <input
                        type="text"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
                      <input
                        type="text"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
                      <input
                        type="text"
                        name="religion"
                        value={formData.religion}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="General">General</option>
                        <option value="OBC">OBC</option>
                        <option value="SC">SC</option>
                        <option value="ST">ST</option>
                        <option value="EWS">EWS</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Caste</label>
                      <input
                        type="text"
                        name="caste"
                        value={formData.caste}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Mobile No</label>
                      <input
                        type="tel"
                        name="emergencyMobile"
                        value={formData.emergencyMobile}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email ID (Student)</label>
                      <input
                        type="email"
                        name="studentEmailId"
                        value={formData.studentEmailId}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Parents Details Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Parents Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Semai ID</label>
                      <input
                        type="text"
                        name="semaiId"
                        value={formData.semaiId}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact No</label>
                      <input
                        type="tel"
                        name="parentContactNo"
                        value={formData.parentContactNo}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mobile No</label>
                      <input
                        type="tel"
                        name="parentMobile"
                        value={formData.parentMobile}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Father Name</label>
                      <input
                        type="text"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mother Name</label>
                      <input
                        type="text"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Father's Occupation</label>
                      <input
                        type="text"
                        name="fatherOccupation"
                        value={formData.fatherOccupation}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Occupation</label>
                      <input
                        type="text"
                        name="motherOccupation"
                        value={formData.motherOccupation}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Family Income</label>
                      <input
                        type="text"
                        name="familyIncome"
                        value={formData.familyIncome}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Permanent Address Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Permanent Address</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="permanentCity"
                        value={formData.permanentCity}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="permanentState"
                        value={formData.permanentState}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <input
                        type="text"
                        name="permanentPincode"
                        value={formData.permanentPincode}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Current Address Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Current Address</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="currentCity"
                        value={formData.currentCity}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                      <input
                        type="text"
                        name="currentState"
                        value={formData.currentState}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                      <input
                        type="text"
                        name="currentPincode"
                        value={formData.currentPincode}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Local Guardian Details Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Local Guardian Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Guardian Name</label>
                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relation</label>
                      <input
                        type="text"
                        name="guardianRelation"
                        value={formData.guardianRelation}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="guardianAddress"
                        value={formData.guardianAddress}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cell No</label>
                      <input
                        type="tel"
                        name="guardianCellNo"
                        value={formData.guardianCellNo}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Other Details Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Other Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">10th School Name</label>
                      <input
                        type="text"
                        name="tenthSchoolName"
                        value={formData.tenthSchoolName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">10th GPA</label>
                      <input
                        type="text"
                        name="tenthGpa"
                        value={formData.tenthGpa}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">12th Passing Year</label>
                      <input
                        type="text"
                        name="twelfthPassingYear"
                        value={formData.twelfthPassingYear}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">12th School Name</label>
                      <input
                        type="text"
                        name="twelfthSchoolName"
                        value={formData.twelfthSchoolName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">12th GPA</label>
                      <input
                        type="text"
                        name="twelfthGpa"
                        value={formData.twelfthGpa}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">UG GPA</label>
                      <input
                        type="text"
                        name="ugGpa"
                        value={formData.ugGpa}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Vehicle Type</option>
                        <option value="Car">Car</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Bicycle">Bicycle</option>
                        <option value="None">None</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Registration No</label>
                      <input
                        type="text"
                        name="vehicleRegistrationNo"
                        value={formData.vehicleRegistrationNo}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Bank Details Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Bank Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name of Account Holder</label>
                      <input
                        type="text"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bank Account Number</label>
                      <input
                        type="text"
                        name="bankAccountNumber"
                        value={formData.bankAccountNumber}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name of Bank</label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
                      <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Placement Details Section */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">Placement Details</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Batch</label>
                      <input
                        type="text"
                        name="batch"
                        value={formData.batch}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Training Partner (Company)</label>
                      <input
                        type="text"
                        name="trainingPartner"
                        value={formData.trainingPartner}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Role</label>
                      <input
                        type="text"
                        name="jobRole"
                        value={formData.jobRole}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Student Batch</label>
                      <input
                        type="text"
                        name="studentBatch"
                        value={formData.studentBatch}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSaveProfile}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "communication" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Communication</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Messages */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Messages</h3>
                  <div className="space-y-3">
                    {mockMessages.map((message) => (
                      <div key={message.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{message.from}</span>
                          <span className="text-sm text-gray-500">{message.time}</span>
                        </div>
                        <p className="text-gray-700">{message.subject}</p>
                        {message.unread && (
                          <span className="inline-block mt-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            New
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Announcements */}
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Announcements</h3>
                  <div className="space-y-3">
                    {mockAnnouncements.map((announcement) => (
                      <div key={announcement.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{announcement.title}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              announcement.priority === "high"
                                ? "bg-red-100 text-red-800"
                                : announcement.priority === "medium"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {announcement.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{announcement.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>

              {/* Change Password */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    onClick={handleChangePassword}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Change Password
                  </button>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Actions</h3>
                <div className="space-y-4">
                  <button
                    onClick={handleLogout}
                    className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors mr-4"
                  >
                    Logout
                  </button>
                  <button
                    onClick={handleDeactivateAccount}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors mr-4"
                  >
                    Deactivate Account
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete Account
                  </button>
                </div>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Deactivating your account will temporarily disable access but preserve your
                    data. Deleting your account will permanently remove all your information and cannot be undone.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default StudentDashboard;