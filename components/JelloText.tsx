import React from 'react';

interface JelloTextProps {
  text: string;
  className?: string;
}

const JelloText: React.FC<JelloTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={char === ' ' ? 'w-4' : 'inline-block jello-char'}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <style jsx>{`
        .jello-char {
          display: inline-block;
          transition: transform 0.1s ease-in-out;
        }
        .jello-char:hover {
          animation: jello-vertical 0.9s both;
        }
        @keyframes jello-vertical {
          0%, 100% {
            transform: scale3d(1, 1, 1);
          }
          30% {
            transform: scale3d(0.75, 1.25, 1);
          }
          40% {
            transform: scale3d(1.25, 0.75, 1);
          }
          50% {
            transform: scale3d(0.85, 1.15, 1);
          }
          65% {
            transform: scale3d(1.05, 0.95, 1);
          }
          75% {
            transform: scale3d(0.95, 1.05, 1);
          }
        }
      `}</style>
    </span>
  );
};

export default JelloText;