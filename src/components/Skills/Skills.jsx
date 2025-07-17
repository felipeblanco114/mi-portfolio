import React from 'react';
import "./Skills.css";
const Skills = () => {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'JavaScript', level: 70 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Next.js', level: 40 },
    { name: 'Git', level: 70 },
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;