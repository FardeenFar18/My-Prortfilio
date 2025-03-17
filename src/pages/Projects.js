import React from "react";
import AttendancesImages from "../assests/attendanceimage.webp";
import JudgeImages from "../assests/judge.webp";

const projects = [
  {
    id: 1,
    name: "LegalEase - Advocate Management System",
    url: "https://123legal.in",
    image: JudgeImages, // Update with actual image path
    description:
      "A complete advocate-based platform for drafting, counseling, registration, and online consultation. Developed and performed manual testing using a tracking tool.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Express",
      "Bugzilla",
      "Python",
      "Pandas",
    ],
  },
  {
    id: 2,
    name: "WorkTrack - Employee Attendance System",
    url: "https://my.ideelit.com",
    image: AttendancesImages, // Update with actual image path
    description:
      "An employee attendance management system with features such as leave requests, session storage, LOP calculation, and private route authentication. Fully developed from scratch.",
    techStack: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "Express", "Docker"],
  },
];

const Projects = () => {
  return (
    <div className="Projects-container">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="project-grid">
  {projects.map((project) => (
    <div key={project.id} className="p-6 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 project-card">
      <img src={project.image} alt={project.name} className="w-full h-auto max-h-250px object-contain rounded-md mb-4" />
      
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-2 text-blue-600 hover:underline block">
        {project.name}
      </a>
      
      <p className="text-gray-700 mb-3">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full tech-badge">
            {tech}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Projects;
