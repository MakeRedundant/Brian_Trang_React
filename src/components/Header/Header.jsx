import React, { useEffect } from "react";
import "./Header.css";
import { changeLanguage } from "../../javascript/changeLanguage.js";
import { TypewriterComponent } from "../utils/Typewriter/Typewriter";
import ME from "../../assets/MeSlit-Lamp.webp";

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
    <header id="header" className="header">
      <div className="header-container">
        <div className="Header-section">
          <h1>WELCOME TO MY WORLD</h1>
          <div className="header-text">
            <h2 id="hello" onClick={changeLanguage}>
              👋 Hello
            </h2>
            <p>
              My name is Brian, and I&apos;m a software engineer <br />
              based in Australia, Sydney 🦘 🐨
            </p>
            <p>I like to eat good clothes 👔 and wear good food 🍔</p>
            <p>
              but I also like <TypewriterComponent />
            </p>
          </div>
        </div>

        <div className="header-image">
          <img src={ME} alt="Me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
