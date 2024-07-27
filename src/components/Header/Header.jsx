import React, { useEffect } from "react";
import "./Header.css";
import { changeLanguage } from "../../javascript/changeLanguage.js";
import { TypewriterComponent } from "../utils/Typewriter/Typewriter";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

import Headerimage from "../../assets/Headerimage.webp";

import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Header = () => {
  useEffect(() => {
    const languageLoop = () => {
      changeLanguage();
      setTimeout(languageLoop, 2000);
    };

    const delay = setTimeout(languageLoop, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Router>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <header id="header" className="header">
                    <div className="header-container">
                      <div className="Header-section">
                        <h1>WELCOME 👋 </h1>
                        <div className="header-text">
                          <h2 id="hello" onClick={changeLanguage}>
                            👋 Hello
                          </h2>
                          <p>
                            My name is Brian, and I&apos;m a Software developer{" "}
                            <br />
                            based in Australia, Sydney 🦘 🐨
                          </p>
                          <p>
                            I like to eat good clothes 👔 and wear good food 🍔
                          </p>
                          <p>
                            but I also like <TypewriterComponent />
                          </p>
                          <HashLink to="#email">
                            <div className="connect-text">
                              <button>
                                <span>Let`s Connect! 💬</span>
                              </button>
                            </div>
                          </HashLink>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounceInRight" : ""
                  }
                >
                  <div className="header-image">
                    <img src={Headerimage} alt="Me" />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default Header;
