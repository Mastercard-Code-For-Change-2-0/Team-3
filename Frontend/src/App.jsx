import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginRegisterPage from "./components/LoginRegisterPage";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginWrapper />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

// Wrapper so we can pass navigation to LoginRegisterPage
function LoginWrapper() {
  const navigate = useNavigate();
  return <LoginRegisterPage onNavigateToSignup={() => navigate("/signup")} />;
}

export default App;
