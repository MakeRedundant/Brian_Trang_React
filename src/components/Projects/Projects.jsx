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
  const handleProjectClick = (githubLink) => {
    window.open(githubLink, "_blank");
  };

  return (
    <section id="project" className="project">
      <h5>Projects</h5>
      <h2>Check out my stuff here!</h2>
      <div className="container project_container">
        {projectData.map(({ id, image, title, github, category, description, tags }) => {
          return (
            <article
              key={id}
              className="project_item"
              onClick={() => handleProjectClick(github)}
            >
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <div className="project_item-details">
                <h3 className="project_item-title">{title}</h3>
                <p className="project_item-description">{description}</p>
                <div className="project_item-tags">
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


//   return (
//     <div>
//       <section id='fourth'>
//         <div className="Projects-header">
//           <h1>Projects</h1>
//         </div>
//         <div className="Project-container">
//           {/* Main Project */}
//           <div className="Main-Project">
//             {/* Sickie.com Project */}
//             <div className="Sickie-gif">
//               <img src="assets/Sickie.gif" alt="Sickie gif" className="Sickie" />
//             </div>
//             <div className="Sickie-container">
//               <div className="text-box">
//                 <p>Sickie.com is a mockup medical website built with express.js. Password encryption was handled with Bcrypt and The front end was built with Tailwind CSS with the HTML being rendered with Express Handlebars.</p>
//               </div>
//               <div className="button-container">
//                 <a href="https://github.com/MakeRedundant/Sickie.com" className="button" target="_blank" rel="noreferrer">Source Code</a>
//                 <a href="https://takesickies-40fabe44386a.herokuapp.com/" className="button" target="_blank" rel="noreferrer">Live Demo</a>
//               </div>
//             </div>
//           </div>

//           {/* Side Projects */}
//           <div className="Side-Projects">
//             {/* Summoning Game */}
//             <div className="card">
//               <img src="assets/Summoning gif.gif" alt="Summon gif" className="Summon" />
//               <figcaption className="custom-figcaption">Stress free gacha game</figcaption>
//               <div className="text-box">
//                 <p>Users can summon random AI-generated characters using PixelAI from videogames/anime/Visual novels etc</p>
//               </div>
//               <a href="https://github.com/MakeRedundant/Stress-free-gacha" className="button" target="_blank" rel="noreferrer">Source Code</a>
//               <a href="https://makeredundant.github.io/Stress-free-gacha/" className="button" target="_blank" rel="noreferrer">Live Demo</a>
//             </div>
//             {/* Marvel Wiki */}
//             <div className="card">
//               <div className="Marvel-gif">
//                 <img src="assets/Marvel Characters.gif" alt="Marvel gif" className="Marvel" />
//               </div>
//               <figcaption className="custom-figcaption">Marvel Wiki</figcaption>
//               <div className="text-box">
//                 <p>Users can search for their desired Marvel characters with the Marvel API and wikipedia API to see information such as the comics, creators, affliations etc</p>
//               </div>
//               <a href="https://github.com/MakeRedundant/Marvel-Character-Browser" className="button" target="_blank" rel="noreferrer">Source Code</a>
//               <a href="https://makeredundant.github.io/Marvel-Character-Browser/" className="button" target="_blank" rel="noreferrer">Live Demo</a>
//             </div>
//             {/* Tech Blog */}
//             <div className="card">
//               <div className="Blog-gif">
//                 <img src="assets/Tech Blog.gif" alt="Blog gif" className="Blog" />
//               </div>
//               <figcaption className="custom-figcaption">Tech Blog</figcaption>
//               <div className="text-box">
//                 <p>Users can sign in/sign up and create, update/edit and delete posts/comments. The backend utilised Express.js, SQL. Password hashing was handled with Bcrypt. The front end HTML was rendered with handlebars and Tailwind CSS.</p>
//               </div>
//               <a href="https://github.com/MakeRedundant/CMS-Style-Tech_Blog" className="button" target="_blank" rel="noreferrer">Source Code</a>
//               <a href="https://onion-tech-blog-bc59635a679a.herokuapp.com/" className="button" target="_blank" rel="noreferrer">Live Demo (In Maintenance)</a>
//             </div>
//           </div>
//           <div className="see-more-button-container">
//             <a id="see-more-button" className="button" href="#seventh">See More Projects</a>
//           </div>
//         </div>
//       </section>

//       <section id="seventh">
//         <h1>More Projects!</h1>
//         <div className="more-projects-container">
//           <div className="text-box">
//             <p>Haven't had enough? Check these projects out as well!!
//               <a href="https://github.com/MakeRedundant?tab=repositories" className="github-button">
//                 <i className="fab fa-github"></i> More projects
//               </a>
//             </p>
//           </div>
//           <table className="more-tables">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Password Generator</td>
//                 <td>
//                   <p>Web app that generates and saves passwords based on user requirements</p>
//                   <a href="https://github.com/MakeRedundant/Modern-Password-Generator" className="button">Source Code</a>
//                   <a href="https://makeredundant.github.io/Modern-Password-Generator/" className="button">Live Demo</a>
//                 </td>
//               </tr>
//               <tr>
//                 <td>ReadMe Generator</td>
//                 <td>
//                   <p>Professional ReadME Generator for projects built using JS, FS and Inquirer. Which allows users to answer questions based on their needs. Requires cloning code</p>
//                   <a href="https://github.com/MakeRedundant/README_Generator" className="button">Source Code</a>
//                 </td>
//               </tr>
//               <tr>
//                 <td>5-Day Weather Forecast</td>
//                 <td>
//                   <p>5-Day Forecast for a city of your choice</p>
//                   <a href="https://github.com/MakeRedundant/5-Day-WeatherForcast" className="button">Source Code</a>
//                   <a href="https://makeredundant.github.io/5-Day-WeatherForcast/" className="button">Live Demo</a>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Javascript Web development Quiz</td>
//                 <td>
//                   <p>A short JavaScript quiz with a score tracker and timer</p>
//                   <a href="https://github.com/MakeRedundant/Javascript-WebQuiz" className="button">Source Code</a>
//                   <a href="https://makeredundant.github.io/Javascript-WebQuiz/" className="button">Live Demo</a>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Employee-Tracker_SQL</td>
//                 <td>
//                   <p>A command-line application used to manage a company's employee database, using Node.js, Inquirer, and MySQL.</p>
//                   <a href="https://github.com/MakeRedundant/Employee-Tracker_SQL" className="button">Source Code</a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

export default Projects;