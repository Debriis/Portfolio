import React from "react";
import SpotlightCard from "./SpotlightCard";
import "./Skills.css"; // for layout styling

const skills = [
  { name: "HTML", img: "/html.png" },
  { name: "CSS", img: "/css.png" },
  { name: "JavaScript", img: "/javascript.png" },
  { name: "React", img: "/react.png" },
  { name: "Node.js", img: "/nodejs.png" },
  { name: "MongoDB", img: "/mongodb.png" },
  { name: "Git", img: "/git.png" },
  { name: "Tailwind", img: "/tcss.png" },
  { name: "Python", img: "/python.png" },
  { name: "C++", img: "/cpp.png" },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          Here are some of the technologies I work with:
        </p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SpotlightCard
            key={index}
            className="skill-card"
            spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <img src={skill.img} alt={skill.name} className="skill-img" />
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
