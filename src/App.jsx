import React from 'react'
import Home from './Components/pages/home'
import {Routes, Route } from 'react-router-dom';
import Register from './Components/pages/Register';
import Login from './Components/pages/login';
const App = () => {
  return (
    <div>
      
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login/>} />
        </Routes>
      
    </div>
  );
}

export default App