import React from 'react';
import './index.css';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
// Placeholder imports for future components
// import ServicesSection from './components/ServicesSection';
// import WhyHueneuSection from './components/WhyHueneuSection';
// import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <StorySection />
      {/* Placeholder for ServicesSection */}
      {/* <ServicesSection /> */}
      <section style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
         <h2 style={{color: 'var(--color-text-neutral)'}}>Services Section (Coming Soon)</h2>
      </section>
      
      {/* Placeholder for WhyHueneuSection */}
      {/* <WhyHueneuSection /> */}
      <section style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e0e0e0'}}>
        <h2 style={{color: 'var(--color-text-neutral)'}}>Why Hueneu Section (Coming Soon)</h2>
      </section>

      {/* Placeholder for ContactForm */}
      {/* <ContactForm /> */}
      <section style={{ height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#dcdcdc' }}>
        <h2 style={{color: 'var(--color-text-neutral)'}}>Contact Section (Coming Soon)</h2>
      </section>
      
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--color-secondary-neutral)', color: 'var(--color-bg-neutral)'}}>
        <p>&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
        <p>Designs that whisper loud stories.</p>
      </footer>
    </div>
  );
}

export default App;
