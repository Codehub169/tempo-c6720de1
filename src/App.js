import React from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ServicesSection from './components/ServicesSection';
import WhyHueneuSection from './components/WhyHueneuSection';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <WhyHueneuSection />
      <ContactForm />
      
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-secondary-neutral)', color: 'var(--color-bg-neutral)'}}>
        <p>&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
        <p>Designs that whisper loud stories.</p>
      </footer>
    </div>
  );
}

export default App;
