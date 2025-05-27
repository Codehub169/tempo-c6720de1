import React from 'react';
import { ReactComponent as BrandingIcon } from '../assets/icons/branding_icon.svg';
import { ReactComponent as PackagingIcon } from '../assets/icons/packaging_icon.svg';
import { ReactComponent as SocialMediaIcon } from '../assets/icons/social_media_icon.svg';
import { ReactComponent as StationeryIcon } from '../assets/icons/stationery_icon.svg';
import { ReactComponent as CoffeeTableBooksIcon } from '../assets/icons/coffee_table_books_icon.svg';
import { ReactComponent as CreativeProjectsIcon } from '../assets/icons/creative_projects_icon.svg';

const services = [
  {
    id: 'branding',
    name: 'Branding',
    icon: <BrandingIcon className="service-svg-icon" />,
    description: 'Crafting identities that tell your unique story.',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    icon: <PackagingIcon className="service-svg-icon" />,
    description: 'Packaging, but make it poetic and memorable.',
  },
  {
    id: 'social-media',
    name: 'Social Media',
    icon: <SocialMediaIcon className="service-svg-icon" />,
    description: 'Engaging content that sparks connection.',
  },
  {
    id: 'stationery',
    name: 'Stationery',
    icon: <StationeryIcon className="service-svg-icon" />,
    description: 'Tangible designs that leave a lasting impression.',
  },
  {
    id: 'coffee-table-books',
    name: 'Coffee Table Books',
    icon: <CoffeeTableBooksIcon className="service-svg-icon" />,
    description: 'Curating visual narratives you can hold.',
  },
  {
    id: 'creative-projects',
    name: 'Creative Projects',
    icon: <CreativeProjectsIcon className="service-svg-icon" />,
    description: 'Unique collaborations for when inspiration strikes.',
  },
];

const ServicesSection = () => {
  const sectionStyle = {
    padding: '80px 0', // Vertical padding; horizontal padding handled by .container
    backgroundColor: 'var(--color-bg-neutral)',
    textAlign: 'center', // Ensures h2 is centered if not directly in flex flow of container
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontFamily: 'var(--font-heading)', // Corrected: --font-heading (singular)
    color: 'var(--color-text-neutral)',
    marginBottom: '60px',
  };

  const servicesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    // maxWidth and margin are handled by the .container parent
  };

  const serviceItemStyle = {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center content (icon, title, description) horizontally
  };

  const iconContainerStyle = {
    marginBottom: '20px',
    color: 'var(--color-pop-1)', 
    // height is removed; CSS class .service-svg-icon and its media query control SVG size
    display: 'flex', // Still useful for alignment if there were multiple items or complex content
    justifyContent: 'center',
    alignItems: 'center',
  };

  const serviceNameStyle = {
    fontSize: '1.5rem',
    fontFamily: 'var(--font-heading)', // Corrected: --font-heading (singular)
    color: 'var(--color-text-neutral)',
    marginBottom: '10px',
  };

  const serviceDescriptionStyle = {
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
    color: 'var(--color-secondary-neutral)',
    lineHeight: '1.6',
    textAlign: 'center', // Ensure description text itself is centered
  };

  return (
    <section id="services-section" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>What We Do</h2>
        <div style={servicesGridStyle}>
          {services.map((service) => (
            <div key={service.id} style={serviceItemStyle} 
                 onMouseEnter={e => {
                   e.currentTarget.style.transform = 'translateY(-5px)';
                   e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.1)';
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.transform = 'translateY(0)';
                   e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.05)';
                 }}>
              <div style={iconContainerStyle}>{service.icon}</div>
              <h3 style={serviceNameStyle}>{service.name}</h3>
              <p style={serviceDescriptionStyle}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
