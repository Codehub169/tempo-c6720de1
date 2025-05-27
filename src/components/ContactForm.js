import React, { useState } from 'react';

// ContactForm component for user inquiries.
// Styled to feel like a note or letter, includes basic form handling.

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError('Please enter a valid email address.');
        return;
    }

    setIsSubmitting(true);
    try {
      // API call to backend (e.g., /api/contact)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Failed to parse error response from server.'})); // Handle non-JSON error responses
        setError(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionStyle = {
    padding: '80px 20px',
    backgroundColor: 'var(--color-bg-neutral)', // Off-White
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
    fontFamily: 'var(--font-heading)', // Corrected from potential 'font-headings'
    color: 'var(--color-text-neutral)',
    marginBottom: '40px',
    textAlign: 'center',
  };

  const formStyle = {
    backgroundColor: '#ffffff', // White paper feel
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    border: '1px solid #eee', // Subtle border like a note
  };

  const inputGroupStyle = {
    marginBottom: '25px',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    color: 'var(--color-secondary-neutral)',
    marginBottom: '8px',
    fontSize: '0.9rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    boxSizing: 'border-box',
    backgroundColor: '#fdfdfd',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '150px',
    resize: 'vertical',
  };

  const baseButtonStyle = {
    backgroundColor: 'var(--color-pop-1)', // Tomato pop color
    color: '#ffffff',
    border: 'none',
    padding: '15px 25px',
    borderRadius: '4px',
    fontFamily: 'var(--font-heading)', // Corrected from potential 'font-headings'
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, opacity 0.3s ease',
    display: 'block',
    width: '100%',
    marginTop: '10px',
  };
  
  const buttonHoverStyle = {
      backgroundColor: 'var(--color-pop-2)', // Steel Blue on hover
  };

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const currentButtonStyle = {
      ...baseButtonStyle,
      ...(isButtonHovered ? buttonHoverStyle : {}),
      ...(isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}),
  };

  const instagramLinkStyle = {
    marginTop: '40px',
    fontFamily: 'var(--font-body)',
    color: 'var(--color-secondary-neutral)',
    textAlign: 'center',
  };

  const instagramAnchorStyle = {
    color: 'var(--color-pop-1)',
    textDecoration: 'none',
    fontWeight: 'bold',
  };
  
  const messageStyle = {
    textAlign: 'center',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    fontFamily: 'var(--font-body)',
  };

  const successMessageStyle = {
    ...messageStyle,
    backgroundColor: '#e6ffed', // Light green
    color: '#22863a',
  };

  const errorMessageStyle = {
    ...messageStyle,
    backgroundColor: '#ffe6e6', // Light red
    color: '#c00',
  };

  return (
    <section id="contact-section" style={sectionStyle} className="container">
      <h2 style={titleStyle}>Let's Work Together</h2>
      <form onSubmit={handleSubmit} style={formStyle} noValidate>
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required aria-required="true" disabled={isSubmitting} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Your Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required aria-required="true" disabled={isSubmitting} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Your Story (or message)</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={textareaStyle} required aria-required="true" disabled={isSubmitting} />
        </div>
        <button type="submit" style={currentButtonStyle} 
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : "Let's design your story"}
        </button>
        {error && <p style={errorMessageStyle} role="alert">{error}</p>}
        {isSubmitted && <p style={successMessageStyle} role="alert">Thank you! Your story is on its way to us.</p>}
      </form>
      <div style={instagramLinkStyle}>
        <p>Find us on Instagram: <a href="https://instagram.com/hueneu_" target="_blank" rel="noopener noreferrer" style={instagramAnchorStyle}>@hueneu_</a></p>
      </div>
    </section>
  );
};

export default ContactForm;
