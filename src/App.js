import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';

const App = () => {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
