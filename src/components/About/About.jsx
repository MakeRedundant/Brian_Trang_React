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

                As an Optometrist, I worked in a wide range of fields including
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
                being fexible and being an all around fun person to work with makes coding fun!
                When not coding, you can find me watching YouTube coding tutorials or cat videos 🐱‍💻.
                Look around, and I hope to hear back from you! 👋
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
