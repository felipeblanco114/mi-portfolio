import React from 'react';
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content">
        <p>
          Desarrollador frontend con más de 4 años de experiencia como tutor de desarrollo web en Coderhouse, 
          donde impartí más de 30 cursos, ayudando a cientos de estudiantes a adquirir y perfeccionar sus 
          habilidades en desarrollo web.
        </p>
        <p>
          Actualmente, me encuentro estudiando Ingeniería de Software Comercial en Jala University, ampliando 
          mis conocimientos y competencias técnicas. Además, colaboro como voluntario en la ONG InkuA, 
          enfocándome en el desarrollo frontend con React y NextJs.
        </p>
        <p>
          Me gusta aprender continuamente y afrontar nuevos desafíos, lo que me permite mejorar mis habilidades 
          y adaptarme a diferentes entornos de trabajo.
        </p>
      </div>
    </section>
  );
};

export default About;