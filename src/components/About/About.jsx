import "./About.css";
import { TypewriterComponent2 } from "../utils/Typewriter/Typewriter2";
// import GlsPhoto from '../../assets/Paedriatic-Gls.jpg';
// import ShakingEyesGif from '../../assets/capoo-gaming.gif';

const About = () => {
  return (
    <div className="first-section">
      <section id="about">
        <h1>About</h1>
        <div className="container">
          <div className="shaking-eyes-gif">
            {/* <img src={ShakingEyesGif} alt="Shaking eyes" /> */}
          </div>
          <div className="about-text">
            <div className="text-box">
              <p>
                As an Optometrist, I worked in a wide range of fields including
                Paediatrics, Refractive (LASIK), Glaucoma, Orthoptics, and Retinal.
                <br />
                After more than 5 years as an Optometrist, I have decided to
                jump over to programming! 👀 <br />
                I enjoy studying <TypewriterComponent2 />.
              </p>
              <p>
                When I'm not coding, you can find me watching YouTube coding tutorials or cat videos 🐱‍💻.
                <br />
                Look around, and I hope to hear back from you! 👋
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
