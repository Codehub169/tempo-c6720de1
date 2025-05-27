import React from 'react';
// import AnimatedLogo from './AnimatedLogo'; // Will be created in a future step

// Placeholder for AnimatedLogo until it's created
const AnimatedLogo = () => (
  <div style={{
    width: '150px',
    height: '150px',
    backgroundColor: 'var(--color-pop-1)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--color-bg-neutral)',
    fontSize: '2rem',
    fontFamily: 'var(--font-heading)',
    fontWeight: 'bold',
    animation: 'logoPulse 2s infinite ease-in-out'
  }}>
    hueneu
    <style>{`
      @keyframes logoPulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
      }
    `}</style>
  </div>
);

const HeroSection = () => {
  const scrollToNextSection = () => {
    // Find the next section and scroll to it
    // This is a simple implementation; a more robust solution might use refs or IDs
    const storySection = document.querySelector('.story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <AnimatedLogo />
        <h1 className="tagline">Where stories find their aesthetic.</h1>
        <p className="subtext">Designs that whisper loud stories.</p>
      </div>
      <div className="scroll-indicator" onClick={scrollToNextSection} title="Scroll Down">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16.5l-6-6 1.41-1.41L12 13.67l4.59-4.58L18 10.5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
