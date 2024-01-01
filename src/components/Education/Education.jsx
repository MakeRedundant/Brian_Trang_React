import "./Education.css";
import USYDLogo from "../../assets/USYD.webp";
import UNSWLogo from "../../assets/UNSW.webp";

const Education = () => {
  return (
    <section id='education'>
      <h1>Education</h1>
      <div className="text-box">
        <div className="university">
          <img src={USYDLogo} alt="University of Sydney Logo" />
          <p>Full stack web development - <span>University of Sydney</span></p>
        </div>
        <div className="university">
          <img src={UNSWLogo} alt="University of New South Wales Logo" />
          <p>Master of Optometry - <span>University of New South Wales</span></p>
        </div>
        <div className="university">
          <p>Bachelor of Vision Science - <span>University of New South Wales</span></p>
        </div>
      </div>
    </section>
  );
};

export default Education;


