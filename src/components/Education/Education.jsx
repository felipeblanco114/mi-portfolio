import React from 'react';
import "./Education.css";
const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'Jala University',
      degree: 'Ingeniería de software',
      period: 'diciembre de 2024 - diciembre de 2028'
    },
    {
      id: 2,
      institution: 'Teclab Instituto Técnico Superior',
      degree: 'Auxiliar en Programación',
      period: 'agosto de 2023 - julio de 2024'
    },
    {
      id: 3,
      institution: 'Coderhouse',
      degree: 'React Js',
      period: 'octubre de 2021 - diciembre de 2021'
    },
    {
      id: 4,
      institution: 'Coderhouse',
      degree: 'Diseño Web',
      period: '2020 - 2020'
    }
  ];

  return (
    <section id="education">
      <h2 className="section-title">Educación</h2>
      <div className="education-list">
        {education.map(edu => (
          <div key={edu.id} className="education-item">
            <h3>{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-period">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;