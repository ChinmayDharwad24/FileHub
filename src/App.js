// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import DocumentContainer from './pages/Home/Home';
import Register from './pages/Register/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route  path="/documents" element={<DocumentContainer />} exact />
      </Routes>
    </Router>
  );
}

export default App;
