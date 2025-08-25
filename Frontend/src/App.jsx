import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginRegisterPage from "./components/LoginRegisterPage";
import Signup from "./components/Signup";
import UserManagement from "./components/clerk/UserManagement"; // 👈 import owner page
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user-management" element={<UserManagement />} /> {/* 👈 new route */}
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper so we can pass navigation to LoginRegisterPage
function LoginWrapper() {
  const navigate = useNavigate();
  return (
    <LoginRegisterPage
      onNavigateToSignup={() => navigate("/signup")}
      onNavigateToUserManagement={() => navigate("/user-management")} // 👈 pass navigation
    />
  );
}

export default App;
