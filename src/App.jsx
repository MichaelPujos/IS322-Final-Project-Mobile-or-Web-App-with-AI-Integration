// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AskAI from './pages/AskAI';
import SavedAnswers from './pages/SavedAnswers';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/ask">Ask AI</Link>
        <Link to="/saved">Saved</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<AskAI />} />
        <Route path="/saved" element={<SavedAnswers />} />
      </Routes>
    </Router>
  );
}

export default App;
