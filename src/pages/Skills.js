const Skills = () => {
  const skills = [
    "React.js", "Node.js", "PostgreSQL", "MongoDB", "Manual Testing", 
    "HTML", "CSS", "Java", "Git Commands", "Express.js"
  ];

  return (
    <div className="skills-bubble-container">
      <h2 className="bubble-title">Skills</h2>
      <div className="skills-bubble">
        {skills.map((skill, index) => (
          <span key={index} className="bubble">{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
