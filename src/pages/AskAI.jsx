import React, { useState } from 'react';
import { getAIResponse } from '../mockAI';
import TypingDots from '../components/TypingDots';

const samplePrompts = [
  "What’s the meaning of life?",
  "Give me a motivational quote.",
  "Tell me a fun fact about space.",
  "Write a fake rap bar.",
  "Tell me a joke about coding.",
];

const AskAI = () => {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [style, setStyle] = useState('default');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsTyping(true);
    setAnswer('');

    setTimeout(() => {
      const reply = getAIResponse(input, style);
      setAnswer(reply);
      setIsTyping(false);

      const saved = JSON.parse(localStorage.getItem('mockAIHistory')) || [];
      saved.push({
        question: input,
        answer: reply,
        timestamp: new Date().toISOString(),
        personality: style
      });
      localStorage.setItem('mockAIHistory', JSON.stringify(saved));
    }, 700);
  };

  const fillPrompt = (prompt) => setInput(prompt);

  return (
    <div className="p5-container">
      <h2 className="p5-title">Ask the AI</h2>

      <div className="p5-avatar">
        {style === 'sassy' && '😎'}
        {style === 'poetic' && '🌙'}
        {style === 'chill' && '🧊'}
        {(style === 'default') && '💬'}
      </div>

      {/* Style Dropdown */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label>Style: </label>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="p5-select"
        >
          <option value="default">Default</option>
          <option value="sassy">Sassy</option>
          <option value="poetic">Poetic</option>
          <option value="chill">Chill</option>
        </select>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit}>
        <textarea
          className="p5-input"
          rows="3"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="p5-btn" type="submit">Submit</button>
      </form>

      {/* Suggestions */}
      <div className="p5-suggestions">
        {samplePrompts.map((prompt, i) => (
          <button
            key={i}
            className="p5-suggest"
            onClick={() => fillPrompt(prompt)}
            disabled={isTyping}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Response */}
      <div className="p5-response">
        {isTyping && <TypingDots />}
        {!isTyping && answer && (
          <div className={`chat-bubble ai bubble-${style} p5-bubble`}>
            <strong>AI:</strong> {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default AskAI;
