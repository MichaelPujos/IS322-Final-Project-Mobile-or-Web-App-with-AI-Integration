import React, { useState, useEffect } from 'react';

const TypingDots = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : prev + '.'));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chat-bubble ai bubble-default">
      <strong>AI:</strong> Thinking{dots}
    </div>
  );
};

export default TypingDots;
