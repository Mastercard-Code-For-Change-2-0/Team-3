import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import AuthPage from './components/AuthPage';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;