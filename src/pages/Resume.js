import React from "react";

const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>

      {/* Academic Profile */}
      <section className="resume-section">
  <h2>🎓 Academic Profile</h2>

  <p><strong>Degree:</strong> B.E. Computer Science and Engineering</p>
  <p><strong>Institution:</strong> Annamalai University,Chidambaram</p>
  <p><strong>Year of Graduation:</strong> 2019 - 2023</p>

  <p><strong>HSC:</strong> Mount Park Hr Sec School, Thiyagadurgam</p>
  <p><strong>Year of Completion:</strong> 2018 - 2019</p>

  <p><strong>SSLC:</strong>  Mount Park Hr Sec School, Thiyagadurgam</p>
  <p><strong>Year of Completion:</strong> 2016 - 2017</p>
</section>

      {/* Tech Stack Proficiency */}
      <section className="resume-section">
        <h2>🛠 Tech Stack Proficiency</h2>
        <ul>
          <li><strong>Frontend:</strong> React.js, JavaScript, HTML, CSS</li>
          <li><strong>Backend:</strong> Node.js, Express.js</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL</li>
          <li><strong>Testing:</strong> Manual Testing</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section className="resume-section">
        <h2>💼 Work Experience</h2>
        <p><strong>Role:</strong> MERN Stack Developer</p>
        <p><strong>Company:</strong> Ideelit Softwares LLP</p>
        <p><strong>Experience:</strong> 1.6 Years</p>
        <p><strong>Responsibilities:</strong></p>
        <ul>
          <li>Developed and maintained full-stack web applications using the MERN stack.</li>
          <li>Worked on REST API development and database management.</li>
          <li>Performed manual testing to ensure code quality.</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="resume-section">
        <h2>📜 Certifications</h2>
        <ul>
          <li>Web Designing - NSIC, Chennai</li>

        </ul>
      </section>
    </div>
  );
};

export default Resume;
