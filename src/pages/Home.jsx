import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [recentChats, setRecentChats] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('mockAIHistory')) || [];
    setRecentChats(saved.slice(-2).reverse());
  }, []);

  return (
    <div className="p5-home">
      {/* Logo */}
      <div className="p5-logo">🤖 AI Assistant</div>
      <p className="p5-subtitle">Give it a try.</p>

      {/* Menu */}
      <div className="p5-menu">
        <button onClick={() => navigate('/ask')} className="p5-btn">💬 Start Chat</button>
        <button onClick={() => navigate('/saved')} className="p5-btn">📁 Saved Chats</button>
        <button onClick={() => document.body.classList.toggle('p5-dark')} className="p5-btn">🌓 Toggle Mode</button>
      </div>

      {/* Features */}
      <section className="p5-section">
        <h3>✨ What Can It Do?</h3>
        <div className="feature-grid">
          <div className="feature-card">💡 Answer your quirky questions</div>
          <div className="feature-card">🎭 Respond with personality styles</div>
          <div className="feature-card">📥 Save your favorite conversations</div>
          <div className="feature-card">⚡ Works offline with prebuilt replies</div>
        </div>
      </section>

      {/* Recent Chats */}
      {recentChats.length > 0 && (
        <section className="p5-section">
          <h3>🕘 Recent Chats</h3>
          {recentChats.map((item, i) => (
            <div key={i} className={`chat-bubble ai bubble-${item.personality || 'default'}`}>
              <strong>You:</strong> {item.question} <br />
              <strong>AI:</strong> {item.answer}
            </div>
          ))}
        </section>
      )}

      {/* CTA */}
      <section className="p5-section">
        <p>🚀 Ready to test it out?</p>
        <button onClick={() => navigate('/ask')} className="p5-btn">Let’s Go</button>
      </section>

      <footer className="footer">
        Created by Michael Pujos · Final Project 2025
      </footer>
    </div>
  );
};

export default Home;
