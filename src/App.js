import React from 'react';
import './App.css';
import Login from './Components/login';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route,Switch } from 'react-router-dom'
 
// import Login from './Components/login';
// import Signup from './Components/signup';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login
         />} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
  );
}

export default App;
