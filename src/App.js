import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Felipe Blanco Muzzolón. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;