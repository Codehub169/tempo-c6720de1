import React from 'react';
import AnimatedLogo from './AnimatedLogo';

const HeroSection = () => {
  const scrollToNextSection = () => {
    const storySection = document.querySelector('.story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    scrollToNextSection();
  };

  const handleScrollKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Prevent default space scroll / enter action on button-like div
      scrollToNextSection();
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        <AnimatedLogo />
        <h1 className="tagline">Where stories find their aesthetic.</h1>
        <p className="subtext">Designs that whisper loud stories.</p>
      </div>
      <div 
        className="scroll-indicator" 
        onClick={handleScrollClick} 
        onKeyDown={handleScrollKeyDown}
        role="button"
        tabIndex={0}
        title="Scroll Down"
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 16.5l-6-6 1.41-1.41L12 13.67l4.59-4.58L18 10.5z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
