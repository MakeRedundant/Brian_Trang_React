import "./Projects.css";
import PROJECT1 from "../../assets/Sickie.gif";
import PROJECT2 from "../../assets/Summoning gif.gif";
import PROJECT3 from "../../assets/Marvel Characters.gif";
import PROJECT4 from "../../assets/Tech Blog.gif";
import PROJECT5 from "../../assets/Weather Forecast.gif";
import PROJECT6 from "../../assets/ReadMe Generator.gif";
import Mainproject from "../../assets/Complain.com.gif";
import { useState } from "react";

const projectData = [
  {
    id: 1,
    image: PROJECT1,
    title: "Sickie.com",
    github: "https://github.com/MakeRedundant/Sickie.com",
    category: "Full-stack Website",
    Live: "https://takesickies-40fabe44386a.herokuapp.com/",
    Source: "https://github.com/MakeRedundant/Sickie.com",
    description:
      "Sickie.com is a mockup medical website, where users request medical certificates",
    tags: [
      "Javascript",
      "Express.js",
      "Bcrypt",
      "Tailwind",
      "Handebars",
      "SQL",
    ],
  },
  {
    id: 2,
    image: PROJECT2,
    title: "AI Gacha game",
    github: "https://github.com/MakeRedundant/Stress-free-gacha",
    category: "AI-Videogame",
    Live: "https://makeredundant.github.io/Stress-free-gacha/",
    Source: "https://github.com/MakeRedundant/Stress-free-gacha",
    description:
      "Users can generate random AI-generated characters from videogames/anime.",
    tags: ["Javascript", "PixelAI"],
  },
  {
    id: 3,
    image: PROJECT3,
    title: "Marvel-Wiki",
    github: "https://github.com/MakeRedundant/Marvel-Character-Browser",
    category: "Frontend",
    Live: "https://makeredundant.github.io/Marvel-Character-Browser/",
    Source: "https://github.com/MakeRedundant/Stress-free-gacha",
    description:
      "Users can search for Marvel characters to see the info, comics, creators etc",
    tags: ["Javascript", "Tailwind", "Marvel API"],
  },
  {
    id: 4,
    image: PROJECT4,
    title: "Tech Blog",
    github: "https://github.com/MakeRedundant/CMS-Style-Tech_Blog",
    category: "Tech Blog",
    Live: "https://onion-tech-blog-bc59635a679a.herokuapp.com/",
    Source: "https://github.com/MakeRedundant/CMS-Style-Tech_Blog",
    description:
      "Users can sign in/sign up and create, update/edit and delete posts/comments.",
    tags: [
      "Javascript",
      "Express.js",
      "Bcrypt",
      "Tailwind",
      "Handebars",
      "MongoDB",
    ],
  },
  {
    id: 5,
    image: PROJECT5,
    title: "5-Day Weather Forecast",
    github: "https://github.com/MakeRedundant/README_Generator",
    category: "Open Weather API",
    Live: "https://makeredundant.github.io/5-Day-WeatherForcast/",
    Source: "https://github.com/MakeRedundant/5-Day-WeatherForcast",
    description: "5-Day Forecast for a city of your choice",
    tags: ["Javascript", "Open Weather API", "Day JS", "Bootstrap"],
  },
  {
    id: 6,
    image: PROJECT6,
    title: "README Generator",
    github: "https://github.com/MakeRedundant/README_Generator",
    category: "File Generator",
    Source: "https://github.com/MakeRedundant/README_Generator",
    description: "Professional ReadME Generator for projects",
    tags: ["Javascript", "File System", "Inquirer"],
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="project" className="project">
      <h1>Featured Project</h1>
      <div className="Main-Project">
        <div className="Complain-gif">
          <img src="../../assets/Complain.com" alt="Complain gif" className="Complain"></img>
        </div>
        <div className="Main-container">
          <div className="text-box">
            <p>Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt
              and
              The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.
            </p>
          </div>
          <div className="button-container">
            <a href="https://github.com/jarrodbb/your-complaint" className="button" target="_blank" rel="noreferrer">Source
              Code</a>
            <a href="https://your-complaint-b9ee4991068a.herokuapp.com" className="button" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
      <h1>Projects</h1>
      <p>Check out my stuff here!</p>
      <div className="container project-container">
        {projectData.map(
          ({ id, image, title, category, description, tags, Live, Source }) => {
            const isHovered = hoveredProject === id;

            return (
              <article
                key={id}
                className={`project-card ${isHovered ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredProject(id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="project-card-image">
                  <img src={image} alt={title} />
                  {isHovered && (
                    <div className="project-card-overlay">
                      <div className="project-card-category">{category}</div>
                      <div className="project-buttons">
                        {Live && (
                          <button
                            className="project-button"
                            onClick={() => handleProjectClick(Live)}
                          >
                            Live Demo
                          </button>
                        )}
                        {Source && (
                          <button
                            className="project-button"
                            onClick={() => handleProjectClick(Source)}
                          >
                            Source Code
                          </button>
                        )}
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
          }
        )}
      </div> <br>
      </br>
      <p>
        Haven&apos;t had enough? Check these projects out as well!!
        <a
          href="https://github.com/MakeRedundant?tab=repositories"
          className="github-button"
        >
          <i className="fab fa-github"></i> More projects
        </a>
      </p>
    </section>

  );
};

export default Projects;
