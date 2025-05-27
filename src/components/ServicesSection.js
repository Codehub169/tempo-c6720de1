import React from 'react';

// ServicesSection component to display core offerings.
// Uses a flex container for service items and placeholders for icons.

const services = [
  {
    name: 'Branding',
    icon: '[B]', // Placeholder for branding_icon.svg
    description: 'Crafting identities that tell your unique story.',
  },
  {
    name: 'Packaging',
    icon: '[P]', // Placeholder for packaging_icon.svg
    description: 'Packaging, but make it poetic and memorable.',
  },
  {
    name: 'Social Media',
    icon: '[S]', // Placeholder for social_media_icon.svg
    description: 'Engaging content that sparks connection.',
  },
  {
    name: 'Stationery',
    icon: '[T]', // Placeholder for stationery_icon.svg
    description: 'Tangible designs that leave a lasting impression.',
  },
  {
    name: 'Coffee Table Books',
    icon: '[C]', // Placeholder for coffee_table_books_icon.svg
    description: 'Curating visual narratives you can hold.',
  },
  {
    name: 'Creative Projects',
    icon: '[+]',
    description: 'Unique collaborations for when inspiration strikes.',
  },
];

const ServicesSection = () => {
  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: 'var(--color-bg-neutral)', // Off-White
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontFamily: 'var(--font-headings)',
    color: 'var(--color-text-neutral)',
    marginBottom: '60px',
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const serviceItemStyle = {
    padding: '30px',
    backgroundColor: '#ffffff', // White cards for contrast
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  
  // Hover style for service items (applied via JS or could be CSS class)
  // For simplicity, this example doesn't add dynamic hover style here
  // but it's intended to be interactive (e.g., slight lift)

  const iconStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: 'var(--color-pop-1)', // Tomato pop color
    fontFamily: 'var(--font-headings)', // Using heading font for placeholder icon text
  };

  const serviceNameStyle = {
    fontSize: '1.5rem',
    fontFamily: 'var(--font-headings)',
    color: 'var(--color-text-neutral)',
    marginBottom: '10px',
  };

  const serviceDescriptionStyle = {
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
    color: 'var(--color-secondary-neutral)',
    lineHeight: '1.6',
  };

  return (
    <section id="services-section" style={sectionStyle} className="container">
      <h2 style={titleStyle}>What We Do</h2>
      <div style={servicesGridStyle}>
        {services.map((service, index) => (
          <div key={index} style={serviceItemStyle} 
               onMouseEnter={e => {
                 e.currentTarget.style.transform = 'translateY(-5px)';
                 e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.1)';
               }}
               onMouseLeave={e => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
               }}>
            <div style={iconStyle}>{service.icon}</div>
            <h3 style={serviceNameStyle}>{service.name}</h3>
            <p style={serviceDescriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
