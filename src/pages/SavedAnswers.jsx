import React, { useEffect, useState } from 'react';

const SavedAnswers = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('mockAIHistory')) || [];
    setHistory(saved.reverse());
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('mockAIHistory');
    setHistory([]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const formatTimestamp = (iso) => {
    if (!iso) return 'Unknown time';
    try {
      const date = new Date(iso);
      return date.toLocaleString();
    } catch {
      return 'Invalid';
    }
  };

  return (
    <div className="p5-container">
      <h2 className="p5-title">Saved Conversations</h2>

      {history.length === 0 ? (
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>No saved answers yet.</p>
      ) : (
        <>
          {history.map((item, i) => (
            <div key={i}>
              {/* User */}
              <div className="chat-bubble user p5-bubble">
                <strong>You:</strong> {item.question}
                <div style={{ fontSize: '0.8rem', color: '#ddd', marginTop: '4px' }}>
                  {formatTimestamp(item.timestamp)}
                </div>
              </div>

              {/* AI */}
              <div className={`chat-bubble ai bubble-${item.personality || 'default'} p5-bubble`}>
                <strong>
                  {item.personality === 'sassy' && '😎'}
                  {item.personality === 'poetic' && '🌙'}
                  {item.personality === 'chill' && '🧊'}
                  {(!item.personality || item.personality === 'default') && '💬'} AI:
                </strong>{' '}
                {item.answer}
                <br />
                <button
                  onClick={() => copyToClipboard(item.answer)}
                  style={{
                    fontSize: '0.8rem',
                    padding: '6px 10px',
                    backgroundColor: 'black',
                    border: '2px solid red',
                    color: 'white',
                    borderRadius: '6px',
                    marginTop: '8px',
                    cursor: 'pointer'
                  }}
                >
                  📋 Copy
                </button>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button onClick={clearHistory} className="p5-btn">Clear All</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SavedAnswers;
