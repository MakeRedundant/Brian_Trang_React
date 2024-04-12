import "./Projects.css";
import PROJECT1 from "../../assets/Finance-Tracker.webp";
import PROJECT2 from "../../assets/Anime-Game.webp";
import PROJECT3 from "../../assets/Search.webp";
import PROJECT4 from "../../assets/Savings.webp";
import PROJECT5 from "../../assets/Complain.webp";
import PROJECT6 from "../../assets/Specs.webp";
import Mainproject from "../../assets/Oasis.webp";
import { useState } from "react";

const projectData = [
  {
    id: 1,
    image: PROJECT1,
    title: "Expense and Income Tracker",
    github: "https://github.com/MakeRedundant/Expenses_Tracker",
    category: "Finance Tracker",
    Live: "https://expenses-incomes-tracker.netlify.app",
    Source: "https://github.com/MakeRedundant/Expenses_Tracker",
    description:
      "An intuitive web application designed to help users efficiently track their incomes and expenses.",
    tags: [
      "Javascript",
      "React",
      "Chart.js",
      "Local Storage",
      "MUI",
      "Jest",
    ],
  },
  {
    id: 2,
    image: PROJECT2,
    title: "Anime Game",
    github: "https://github.com/MakeRedundant/Higher-Lower_Anime",
    category: "Game",
    Live: "https://higher-lower-anime.vercel.app",
    Source: "https://github.com/MakeRedundant/Higher-Lower_Anime",
    description:
      "Anime popularity guessing game based on data from MyAnimeList (MAL), saves highscores in local storage",
    tags: ["Javascript", "Jikan API", "React", "Game", "Anime", "Local storage"],
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
    tags: ["Javascript", "Tailwind", "Marvel API", "Wiki"],
  },
  {
    id: 4,
    image: PROJECT4,
    title: "AUS Savings Leaderboard",
    github: "https://github.com/MakeRedundant/AUS-Savings_Accounts",
    category: "Finance",
    Live: "https://aus-savings-accounts.vercel.app/",
    Source: "https://github.com/MakeRedundant/AUS-Savings_Accounts",
    description:
      "Users can see which bank account is best for their needs",
    tags: [
      "Javascript",
      "Typescript",
      "React",
      "Axios",
      "Tailwind",
      "Firebase",
      "NextJS"
    ],
  },
  {
    id: 5,
    image: PROJECT5,
    title: "Complain.com",
    github: "https://github.com/MakeRedundant/Complain.com",
    category: "Full stack Social Media App",
    Live: "https://complain-com-a977d53e691f.herokuapp.com/",
    Source: "https://github.com/MakeRedundant/Complain.com",
    description: "Users can sign in/sign up and create, update/edit and delete posts/comments",
    tags: [
      "Javascript",
      "Express.js",
      "Bcrypt",
      "MUI",
      "React",
      "MongoDB",
      "Stripe",
      "GraphQL",
    ],
  },
  {
    id: 6,
    image: PROJECT6,
    title: "Spec-tacular.com",
    github: "https://github.com/MakeRedundant/Spec-tacular-.com",
    category: "E-Commerce/TypeScript",
    Live: "https://spec-tacular-com.vercel.app/",
    Source: "https://github.com/MakeRedundant/Spec-tacular-.com",
    description: "WIP E-commerce store where users can buy sunglasses, glasses, contact lenses and store their prescriptions ",
    tags: ["Javascript","Typescript", "Vite", "Vercal","E-Commerce", "MUI"],
  },
];

const TechStackIcons = () => (
  <div className="tech-stack-icons">
    <i className="fab fa-react" title="React"></i>
    <i className="fas fa-database" title="MongoDB"></i>
    <i className="fas fa-server" title="Express"></i>
    <i className="fab fa-node" title="Node.js"></i>
    <i className="fab fa-graphql" title="GraphQL"></i>
    <i className="fas fa-lock" title="Bcrypt"></i>
    <i className="fas fa-code" title="Base-64"></i>
    <i className="fas fa-paint-brush" title="Emotion Styled"></i>
    <i className="fas fa-envelope" title="EmailJS"></i>
    <i className="fas fa-bell" title="SweetAlert2"></i>
    <i className="fas fa-burn" title="Firebase"></i>
    <i className="fab fa-rocket" title="Netlify"></i>
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
        <div className="Featured-img">
          <img src={Mainproject} alt="Featured project image" className="Featured"></img>
        </div>
        <div className="Main-container">
          <div className="Main-box">
            <p>
              Oasis.com is a dynamic and user-friendly full-stack E-Commerce web
              application designed tailored to transform your living space 🏡 into a productive workspace. 🏢
              Built with Vite for efficient bulding and SASS for sleek stlying. Oasis uses Firebase for authentication 👥
              , Redux for Statemanagement 🔨 and Stripe for payment processing. 💵
              <br />
              <span className="features-header">Features</span>
              <br />
              User authentication 👤: Users can login, signup,
              using their emails or Gmail with Firebase authentication <br />
              Sleek Shopping experience 🛒: The platform allows shopping by categories and selected products to a cart modal <br />
              Email Component 📨 : The contact page features an email component
              powered by email.js <br />
              Sleek UI/UX 🎨: Oasis was styled with
              SASS and uses React slick for the carousel effect. <br />
              <br />
              <span className="features-header">Tech Stack Used:</span>
            </p>
            <TechStackIcons />
          </div>
          <div className="button-container">
            <a
              href="https://home-oasis.netlify.app/"
              className="button"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/MakeRedundant/WFH-Oasis"
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
