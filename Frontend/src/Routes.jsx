// In your routing setup
import React, { useState } from "react";
import { Routes, Route, Navigate, Outlet, useNavigate, useOutletContext } from "react-router-dom";

import Sidebar from "./components/ui/Sidebar";
import LoginRegisterPage from "./components/LoginRegisterPage";
import Signup from "./components/Signup";

// Admin pages
import Admin from "./components/admin/admin";
import ClerkCred from "./components/admin/ClerkCred";
import CreateAdmin from "./components/admin/CreateAdmin";
import CreateClerk from "./components/admin/CreateClerk";
import StudentCred from "./components/admin/StudentCred";

// Clerk
import Clerk from "./components/clerk/clerk";

// Student pages
import StudentHome from "./components/student/student";
import ChangePassword from "./components/student/ChangePassword";
import Communication from "./components/student/Communication";
import LogOut from "./components/student/LogOut";
import DeleteAccount from "./components/student/DeleteAccount";
import DeactivateAccount from "./components/student/DeactivateAccount";

// Icons
import { Home, Settings, Book, Users, UserPlus, IdCard, X } from "lucide-react";

function LoginPage() {
  const navigate = useNavigate();
  return <LoginRegisterPage onNavigateToSignup={() => navigate('/signup')} />;
}

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const nav = [
    { name: "Admin", href: "/admin", icon: Home },
    { name: "ClerkCred", href: "/admin/clerkcred", icon: Users },
    { name: "CreateAdmin", href: "/admin/createadmin", icon: UserPlus },
    { name: "CreateClerk", href: "/admin/createclerk", icon: UserPlus },
    { name: "StudentCred", href: "/admin/studentcred", icon: IdCard },
    { name: "Logout", href: "/", icon: X },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} nav={nav} />
      <main className="flex-1 bg-white shadow-md m-4 rounded-lg overflow-auto p-2 ml-64 lg:ml-0">
        <div className="px-2 py-1 text-xs text-gray-500">Admin Layout</div>
        <Outlet />
      </main>
    </div>
  );
}

function ClerkLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const nav = [
    { name: "Clerk", href: "/clerk", icon: Home },
    { name: "Logout", href: "/", icon: X },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} nav={nav} />
      <main className="flex-1 bg-white shadow-md m-4 rounded-lg overflow-auto p-2 ml-64 lg:ml-0">
        <div className="px-2 py-1 text-xs text-gray-500">Clerk Layout</div>
        <Outlet />
      </main>
    </div>
  );
}

function StudentLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const nav = [
    { name: "Home", href: "/student", icon: Home },
    { name: "Change Password", href: "/student/change-password", icon: Settings },
    { name: "Log Out", href: "/", icon: X },
    { name: "Delete Account", href: "/student/delete-account", icon: X },
    { name: "Deactivate Account", href: "/student/deactivate-account", icon: X },
  ];

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    aadhaar: "",
    address: "",
    tenthSchool: "",
    tenthBoard: "",
    tenthYear: "",
    tenthPercent: "",
    tenthPlace: "",
    twelfthSchool: "",
    twelfthBoard: "",
    twelfthYear: "",
    twelfthPercent: "",
    twelfthPlace: "",
    collegeName: "",
    specialization: "",
    collegeYear: "",
    cgpa: "",
    collegePlace: "",
    fatherName: "",
    fatherOccupation: "",
    fatherContact: "",
    motherName: "",
    motherOccupation: "",
    motherContact: "",
    familyIncome: "",
    batch: "",
    trainingCompany: "",
    jobRole: "",
    studentBranch: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    alert("Profile Updated Successfully!");
    // integrate API call here
  };

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSavePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and Confirm password do not match!");
      return;
    }
    alert("Password Changed Successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} nav={nav} />
      <main className="flex-1 bg-white shadow-md m-4 rounded-lg overflow-auto p-2 ml-64 lg:ml-0">
        <div className="px-2 py-1 text-xs text-gray-500">Student Layout</div>
        <Outlet context={{
          userData,
          handleInputChange,
          handleSaveProfile,
          passwordData,
          handlePasswordChange,
          handleSavePassword,
        }} />
      </main>
    </div>
  );
}

function UseStudentContext() {
  return useOutletContext();
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="clerkcred" element={<ClerkCred />} />
        <Route path="createadmin" element={<CreateAdmin />} />
        <Route path="createclerk" element={<CreateClerk />} />
        <Route path="studentcred" element={<StudentCred />} />
      </Route>

      <Route path="/clerk" element={<ClerkLayout />}>
        <Route index element={<Clerk />} />
      </Route>

      <Route path="/student" element={<StudentLayout />}>
        <Route index element={<StudentHome />} />
        <Route path="change-password" element={<ChangePasswordWithCtx />} />
        <Route path="communication" element={<Communication />} />
        <Route path="logout" element={<LogOut />} />
        <Route path="delete-account" element={<DeleteAccount />} />
        <Route path="deactivate-account" element={<DeactivateAccount />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// EditProfile removed; form lives on /student index

function ChangePasswordWithCtx() {
  const { passwordData, handlePasswordChange, handleSavePassword } = UseStudentContext();
  return (
    <ChangePassword
      passwordData={passwordData}
      handlePasswordChange={handlePasswordChange}
      handleSavePassword={handleSavePassword}
    />
  );
}