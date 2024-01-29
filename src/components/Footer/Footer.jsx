import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const FooterBottom = () => {
  return (
    <div className="footer-text">
      <p>Made by Brian Trang</p>
      <div className="social-icons">
        <a href="https://github.com/MakeRedundant"
          aria-label="Link to Github">
          <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-t-webdeveloper/"
          aria-label="Link to LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
