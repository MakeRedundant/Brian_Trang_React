import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="header">
      <div
        className="container"
        style={{
          background:
            'url(\'assets/astronaut-man.jpg\') no-repeat center center/cover',
        }}
      >
        <div className="zero-section">
          <div className="text-box">
            <h2 id="hello" onClick={changeLanguage}>
              👋 Hello{' '}
            </h2>
            <p>
              My name is Brian, and I'm a software engineer <br />
              based in Australia Sydney 🦘 🐨{' '}
            </p>
            <p>I like to eat good food 👔 and wear good clothes 🍔</p>
            <br />
            <div id="Codingtext"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
