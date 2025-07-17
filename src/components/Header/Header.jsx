import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Felipe Blanco Muzzolón</h1>
        <h2>Junior Frontend Developer (React)</h2>
        <p className="location">Argentina</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/felipe-blanco-muzzolon/" target="_blank" className="social-link">LinkedIn</a>
          <a href="https://github.com/felipeblanco114" target="_blank" className="social-link">GitHub</a>
        </div>
      </div>
    </header>
  );
};

export default Header;