// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingBottom: '60px' }}> {/* Add padding to avoid footer overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
