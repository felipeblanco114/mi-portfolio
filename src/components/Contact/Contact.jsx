import React from 'react';
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-content">
        <p>Si estás interesado en trabajar conmigo o quieres más información, no dudes en contactarme.</p>
        <div className="contact-links">
          <a href="mailto:felipeblanco114@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/felipe-blanco-muzzolon/" target="_blank" className="contact-link">LinkedIn</a>
          <a href="https://github.com/felipeblanco114" target="_blank" className="contact-link">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;