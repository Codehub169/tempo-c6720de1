import React, { useEffect, useState } from 'react';

// AnimatedLogo component for the hueneu logo reveal.
// Uses CSS animations to fade in letters sequentially.
const AnimatedLogo = () => {
  const logoText = 'hueneu';
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    // Simple sequential fade-in animation for logo letters
    if (visibleChars < logoText.length) {
      const timer = setTimeout(() => {
        setVisibleChars(visibleChars + 1);
      }, 200); // Adjust timing as needed
      return () => clearTimeout(timer);
    }
  }, [visibleChars, logoText.length]);

  const logoStyle = {
    fontFamily: 'var(--font-heading)', // DM Sans - Corrected from potential 'font-headings'
    fontSize: 'clamp(3rem, 10vw, 6rem)', // Responsive font size
    fontWeight: 'bold',
    color: 'var(--color-text-neutral)', // Soft Charcoal
    textAlign: 'center',
    letterSpacing: '0.05em',
    padding: '20px 0',
    cursor: 'default',
    height: '100px', // Ensure consistent height during animation
  };

  const charStyle = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    display: 'inline-block', // Prevents layout shift for spaces if any
  });

  return (
    <div style={logoStyle} aria-label="hueneu logo">
      {logoText.split('').map((char, index) => (
        <span key={index} style={charStyle(index < visibleChars)} aria-hidden={index >= visibleChars}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedLogo;
