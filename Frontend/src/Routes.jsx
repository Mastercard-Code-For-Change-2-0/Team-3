// In your routing setup
import LoginRegisterPage from "./components/LoginRegisterPage";

import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  
  const handleNavigateToSignup = () => {
    navigate('/signup');
  };

  return <LoginRegisterPage onNavigateToSignup={handleNavigateToSignup} />;
}