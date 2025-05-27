import React from 'react';

// WhyHueneuSection component for the emotional brand pitch.
// Features poetic copy to highlight the studio's philosophy.

const WhyHueneuSection = () => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: 'var(--color-pop-2)', // Steel Blue background for contrast and mood
    color: 'var(--color-bg-neutral)', // Off-white text on darker background
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontFamily: 'var(--font-headings)',
    marginBottom: '30px',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
    fontFamily: 'var(--font-body)',
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 20px auto',
    opacity: 0.9,
  };

  const emphasisStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'var(--color-bg-neutral)', // Keep text color consistent or use a subtle highlight
  };

  return (
    <section id="why-hueneu-section" style={sectionStyle} className="container">
      <h2 style={titleStyle}>Why hueneu?</h2>
      <p style={paragraphStyle}>
        We don't just design—<span style={emphasisStyle}>we decode stories</span>.
      </p>
      <p style={paragraphStyle}>
        Designs that speak quietly but <span style={emphasisStyle}>stay with you</span>.
      </p>
      <p style={paragraphStyle}>
        Embracing the calm, the mystery, and the perfect balance in every creation.
        We believe in design that feels like a whisper, yet resonates deeply.
      </p>
    </section>
  );
};

export default WhyHueneuSection;
