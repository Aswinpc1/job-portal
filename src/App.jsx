import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SignupPage from './pages/SignupPage';
import Home from './pages/Home';
import LandingPage from './Components/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
