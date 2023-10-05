import React from "react";
import "./Header.css";
import {changeLanguage} from "../../javascript/changeLanguage.js";
// import {Codingtext} from "../../javascript/codingEffect.js";

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
            {/* <div id="Codingtext"></div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


// const LeftBanner = () => {
//     const [text] = useTypewriter({
//       words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
//       loop: true,
//       typeSpeed: 20,
//       deleteSpeed: 10,
//       delaySpeed: 2000,
//     });

//     import { useTypewriter, Cursor } from "react-simple-typewriter";
//try this instead