import React from 'react';
import "./Experience.css";
const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'InkuA',
      position: 'Desarrollador React js',
      period: 'abril de 2024 - Present (1 año 4 meses)',
      location: 'Ciudad de Buenos Aires',
      description: 'Desarrollador de React js en la fundación sin fines de lucro, InkuA.'
    },
    {
      id: 2,
      company: 'Coderhouse',
      position: 'Tutor',
      period: 'mayo de 2020 - abril de 2024 (4 años)',
      location: 'Argentina',
      description: 'Impartí más de 30 cursos de desarrollo web, ayudando a cientos de estudiantes.'
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Experiencia</h2>
      <div className="experience-list">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.company}</h3>
            <h4>{exp.position}</h4>
            <p className="experience-period">{exp.period} · {exp.location}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;