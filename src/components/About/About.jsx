import "./About.css";
import { TypewriterComponent2 } from "../utils/Typewriter/Typewriter2";

const About = () => {
  return (
    <div className="first-section">
      <section id="about">
        <h1>About</h1>
        <div className="terminal__format">
          <div className=" terminal_toolbar">
            <div className="terminal-button">
              <button className="btn btn__red btn-color"></button>
              <button className="btn btn__yellow"></button>
              <button className="btn btn__green"></button>
            </div>
            <p className="user">briandev@admin: ~</p>
          </div>
          <div className="terminal__content" id="text">
            <h3 className="terminal__content">
              <span className="text-highlight">  Brian Trang </span>
            </h3>
            <p className="terminal__content">

                As an Optometrist 👨‍⚕️, I worked in a wide range of fields including
                Paediatrics, Refraction (LASIK), Glaucoma, Orthoptics, and Retinal
                and after more than 5 years, I have decided to
                jump over to programming! 👀 <br />
                Now as a dedicated front-end developer passionate about technology and
                expanding and learning new skills. <br/>
                I enjoy studying <TypewriterComponent2 />.
            </p>
            <h3 className="terminal__content">
                What <span className="text-highlight">sets me apart?</span>
            </h3>
            <p className="terminal__content">
                I enjoy <span className="text-highlight">learning and coding!</span> I believe consistent learning,
                fexibility and being an all around fun person to work with makes coding fun! 🧑‍💻
                When not coding, you can find me drinking tea 🍵, board games with friends 🎲 or watching YouTube coding tutorials or cat videos 🐱‍💻.
              <br/>
                Look around, and I hope to hear back from you! 👋
            </p>
            <div className="card-socials">
              <a
                className="card-socials-btn download-resume"
                href="https://drive.google.com/drive/folders/178aJT71OVJzvM4JJm0IqHat_YxyOVq7O?usp=drive_link"
                target="_blank"
                rel="nofollow noreferrer noopener"
                data-tooltip="Download Resume"
              >
                <i className="far fa-file-pdf about__icons"></i>
              </a>
              <a
                className="card-socials-btn"
                href="https://github.com/MakeRedundant"
                target="_blank"
                rel="nofollow noreferrer noopener"
                data-tooltip="GitHub"
              >
                <i className="fab fa-github about__icons"></i>
              </a>
              <a
                className="card-socials-btn icon"
                href="https://www.linkedin.com/in/brian-t-99916a118/"
                target="_blank"
                rel="nofollow noreferrer noopener"
                data-tooltip="LinkedIn"
              >
                <i className="fab fa-linkedin about__icons"></i>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
