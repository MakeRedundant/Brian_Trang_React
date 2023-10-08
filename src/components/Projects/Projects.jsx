import "./Projects.css";
import {BsGithub} from "react-icons/bs";
import PROJECT1 from "../../assets/Sickie.gif";
import PROJECT2 from "../../assets/Summoning gif.gif";
import PROJECT3 from "../../assets/Marvel Characters.gif";
import PROJECT4 from "../../assets/Marvel Characters.gif";
import PROJECT5 from "../../assets/Marvel Characters.gif";
import PROJECT6 from "../../assets/Marvel Characters.gif";
import { useState } from "react";

const projectData = [
  {
    id: 1,
    image: PROJECT1,
    title: "Sickie.com",
    github: "https://github.com/MakeRedundant/Sickie.com",
    category: "Full-stack Website",
    description:"Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.",
    tags: ["Javascript","Express.js"],
  },
  {
    id: 2,
    image: PROJECT2,
    title: "Personnel Tracking App",
    github: "https://github.com/MakeRedundant/Stress-free-gacha",
    category: "AI-Videogame",
    description:"Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.",
    tags: ["Javascript","Express.js"],
  },
  {
    id: 3,
    image: PROJECT3,
    title: "Marvel-Wiki",
    github: "https://github.com/MakeRedundant/Marvel-Character-Browser",
    category: "Frontend",
    description:"Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.",
    tags: ["Javascript","Express.js"],
  },
  {
    id: 4,
    image: PROJECT4,
    title: "Tech Blog",
    github: "https://github.com/MakeRedundant/CMS-Style-Tech_Blog",
    category: "Tech Blog",
    description:"Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.",
    tags: ["Javascript","Express.js"],
  },
  {
    id: 5,
    image: PROJECT5,
    title: "Employee Tracker_SQL",
    github: "https://github.com/MakeRedundant/Employee-Tracker_SQL",
    category: "Backend",
    description:"Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.",
    tags: ["Javascript","Express.js"],
  },
  {
    id: 6,
    image: PROJECT6,
    title: "README Generator",
    github: "https://github.com/MakeRedundant/README_Generator",
    category: "Backend",
    description:"Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.",
    tags: ["Javascript","Express.js"],
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <section id="project" className="project">
      <h5>Projects</h5>
      <h2>Check out my stuff here!</h2>
      <div className="container project-container">
        {projectData.map(({ id, image, title, github, category, description, tags }) => {
          const isHovered = hoveredProject === id;

          return (
            <article
              key={id}
              className={`project-card ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredProject(id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(github)}
            >
              <div className="project-card-image">
                <img src={image} alt={title} />
                {isHovered && (
                  <div className="project-card-overlay">
                    <div className="project-card-category">{category}</div>
                    <div className="project-card-icon">
                      <BsGithub size={50} />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card-details">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-description">{description}</p>
                <div className="project-card-tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;