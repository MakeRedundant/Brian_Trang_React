import "./Projects.css";
import PROJECT1 from "../../assets/Sickie.png";
import PROJECT2 from "../../assets/Summoning.png";
import PROJECT3 from "../../assets/Search.png";
import PROJECT4 from "../../assets/Tech Blog.png";
import PROJECT5 from "../../assets/Weather.png";
import PROJECT6 from "../../assets/ToDo.png";
import Mainproject from "../../assets/Complain.webp";
//import the gif directly instead of src it, helps with webpack and dynamic loading.
import { useState } from "react";

const projectData = [
  {
    id: 1,
    image: PROJECT1,
    title: "Sickie.com",
    github: "https://github.com/MakeRedundant/Sickie.com",
    category: "Full-stack Website",
    Live: "https://sickie-com-072b043c893e.herokuapp.com",
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
    category: "Wiki",
    Live: "https://makeredundant.github.io/Marvel-Character-Browser/",
    Source: "https://github.com/MakeRedundant/Marvel-Character-Browser",
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
    title: "To-Do App",
    github: "https://github.com/MakeRedundant/To-Do_Vue",
    category: "Vite/TypeScript",
    Live: "https://to-do-vue-theta.vercel.app/",
    Source: "https://github.com/MakeRedundant/To-Do_Vue",
    description: "To Do App built with Vue",
    tags: ["Javascript", "Vue", "Typescript", "Vite", "Vercal"],
  },
];

const TechStackIcons = () => (
  <div className="tech-stack-icons">
    <i className="fab fa-react" title="React"></i>
    <i className="fas fa-database" title="MongoDB"></i>
    <i className="fas fa-server" title="Express"></i>
    <i className="fab fa-node" title="Node.js"></i>
    <i className="fab fa-graphql" title="GraphQL"></i>
    <i className="fab fa-node-js" title="MUI"></i>
    <i className="fas fa-lock" title="Bcrypt"></i>
    <i className="fas fa-code" title="Base-64"></i>
    <i className="fas fa-paint-brush" title="Emotion Styled"></i>
    <i className="fas fa-envelope" title="EmailJS"></i>
    <i className="fas fa-bell" title="SweetAlert2"></i>
  </div>
);

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
          <img src={Mainproject} alt="Complain gif" className="Complain"></img>
        </div>
        <div className="Main-container">
          <div className="Main-box">
            <p>
              Complain.com is a dynamic and user-friendly full-stack web
              application designed to give voice to concerns and complaints.
              Built with the cutting-edge MERN stack (MongoDB, Express, React,
              Node.js).
              <br />
              <span className="features-header">Features</span>
              <br />
              Complaint Creation and Management: Users can create, edit, and
              delete their own posts effortlessly <br />
              Featured Posts: The platform showcases the top-voted posts as
              featured complaints on the homepage <br />
              Rich Multimedia Support: Complain.com allows users to enrich their
              posts by uploading images <br />
              Email Component: The contact page features an email component
              powered by email.js <br />
              Sleek UI/UX: Complain.com was rendered using React and styled with
              Material-UI, Styled Components, and Emotion Styled. <br />
              <br />
              <span className="features-header">Tech Stack Used:</span>
            </p>
            <TechStackIcons />
          </div>
          <div className="button-container">
            <a
              href="https://complain-com-a977d53e691f.herokuapp.com"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/MakeRedundant/Complain.com"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
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
                  <h2 className="project-card-title">{title}</h2>
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
      </div>{" "}
      <br></br>
      <p>
        Haven&apos;t had enough? Check these projects out as well!!
        <a
          href="https://github.com/MakeRedundant?tab=repositories"
          className="github-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> More projects
        </a>
      </p>
    </section>
  );
};

export default Projects;
