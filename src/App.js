import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AskAI from './pages/AskAI';
import SavedAnswers from './pages/SavedAnswers'; // double-check this line
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<AskAI />} />
        <Route path="/saved" element={<SavedAnswers />} />
      </Routes>
    </>
  );
}

export default App;
