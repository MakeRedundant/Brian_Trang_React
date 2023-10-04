import React from "react";
import "./about.css";
import GlsPhoto from '../../assets/Paedriatic-Gls.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <h5>{('about.title2')}</h5>
      <h2>{("about.title")}</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={GlsPhoto} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <p>
            {("about.content1")}
            <br />
            <br />
            {("about.content2")}
            <br />
            <br />
            {("about.content3")}
          </p>
          <a href="#project" className="btn btn-primary">
            {("about.seeProjects")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;