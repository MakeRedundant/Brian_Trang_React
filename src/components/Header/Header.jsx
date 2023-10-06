import React from "react";
import "./Header.css";
import {changeLanguage} from "../../javascript/changeLanguage.js";
// import {Codingtext} from "../../javascript/codingEffect.js";
// import MyTypewriter from "../../javascript/typeWriter.js";
import { TypewriterComponent } from "../utils/Typewriter/Typewriter";


const Header = () => {
  return (
    <header id="header">
      <div
        className="container"
      >
        <div className="zero-section">
          <div className="text-box">
            <h2 id="hello" onClick={changeLanguage}>
              👋 Hello{" "}
            </h2>
            <p>
              My name is Brian, and I&apos;m a software engineer <br />
              based in Australia Sydney 🦘 🐨{" "}
            </p>
            <p>I like to eat good food 👔 and wear good clothes 🍔</p>
            <br />
            <p>but i also like <TypewriterComponent words= {["Coding"]} /></p>
            {/* <div id="Codingtext"></div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
