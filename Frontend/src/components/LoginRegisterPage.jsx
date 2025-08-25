// components/LoginRegisterPage.jsx
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { User, Lock, UserPlus, GraduationCap, Shield, Settings } from "lucide-react";

const LoginRegisterPage = ({ onNavigateToSignup, onNavigateToUserManagement }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [userType, setUserType] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login or signup button click
const handleSubmit = () => {
  if (activeTab === "register") {
    // Navigate to detailed signup page for students
    if (onNavigateToSignup) {
      onNavigateToSignup(); // <--- this will push to /signup
    }
    return;
  }

  // Handle login for all user types
  if (validateForm()) {
    console.log(`${userType} login:`, { username: formData.username, password: formData.password });
    alert(`Welcome ${userType}! Login successful.`);
    setFormData({ name: "", username: "", password: "" });
  }
};


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Tabs */}
      <div className="flex mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded-xl ${activeTab === "login" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-xl ${activeTab === "register" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>

      {/* User type selection */}
      <div className="flex space-x-4 mb-6">
{[
  { type: "student", icon: GraduationCap },
  { type: "admin", icon: Shield },
  { type: "owner", icon: Settings }
].map(({ type, icon: Icon }) => (
  <button
    key={type}
    className={`p-3 rounded-xl border ${userType === type ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300"}`}
    onClick={() => {
      setUserType(type);
      if (type === "owner" && onNavigateToUserManagement) {
        onNavigateToUserManagement(); // 👈 navigates to /user-management
      }
    }}
  >
    <Icon className="w-6 h-6" />
  </button>
))}

      </div>

      {/* Form */}
      <div className="bg-white p-8 rounded-2xl shadow-md w-96">
        {activeTab === "register" && (
          <div className="mb-4 flex items-center border rounded-lg p-2">
            <User className="w-5 h-5 mr-2 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full outline-none"
            />
          </div>
        )}
        <div className="mb-4 flex items-center border rounded-lg p-2">
          <UserPlus className="w-5 h-5 mr-2 text-gray-400" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <div className="mb-6 flex items-center border rounded-lg p-2">
          <Lock className="w-5 h-5 mr-2 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
        >
          {activeTab === "login" ? "Login" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
