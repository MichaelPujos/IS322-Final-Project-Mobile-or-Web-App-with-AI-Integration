// src/components/AnimatedBlob.jsx
import React from 'react';

const AnimatedBlob = () => {
  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'fixed',
        top: '-200px',
        left: '-200px',
        zIndex: -1,
        opacity: 0.3,
        width: '1000px',
        height: '1000px',
        animation: 'float 12s ease-in-out infinite alternate',
        filter: 'blur(120px)',
        pointerEvents: 'none',
      }}
    >
      <defs>
        <linearGradient id="blobGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d3557" />
          <stop offset="100%" stopColor="#457b9d" />
        </linearGradient>
      </defs>
      <path fill="url(#blobGradient)">
        <animate
          attributeName="d"
          dur="30s"
          repeatCount="indefinite"
          values="
            M400,300 Q470,340 450,400 Q430,460 360,470 Q290,480 260,420 Q230,360 300,310 Q370,260 400,300Z;

            M420,290 Q490,360 430,420 Q370,480 300,450 Q230,420 260,350 Q290,280 360,270 Q430,260 420,290Z;

            M400,300 Q470,340 450,400 Q430,460 360,470 Q290,480 260,420 Q230,360 300,310 Q370,260 400,300Z
          "
        />
      </path>
    </svg>
  );
};

export default AnimatedBlob;
