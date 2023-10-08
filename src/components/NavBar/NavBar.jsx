import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let activeSection = "#";

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0) {
          activeSection = "#" + section.getAttribute("id");
        }
      }

      setActiveNav(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* First Navigation Bar */}
      <nav>
        <a
          href="#header"
          className={activeNav === "#header" ? "active" : ""}
          data-text="Home"
        >
          <i className="far fa fa-home"></i>
        </a>
        <a
          href="#first"
          className={activeNav === "#first" ? "active" : ""}
          data-text="About"
        >
          <i className="far fa-user"></i>
        </a>
        <a
          href="#second"
          className={activeNav === "#second" ? "active" : ""}
          data-text="Experience"
        >
          <i className="fas fa-briefcase"></i>
        </a>
        <a
          href="#third"
          className={activeNav === "#third" ? "active" : ""}
          data-text="Skills"
        >
          <i className="icon fa fa-code"></i>
        </a>
        <a
          href="#fourth"
          className={activeNav === "#fourth" ? "active" : ""}
          data-text="Project"
        >
          <i className="far fa-folder-open"></i>
        </a>
        <a
          href="#fifth"
          className={activeNav === "#fifth" ? "active" : ""}
          data-text="Education"
        >
          <i className="far fa fa-school"></i>
        </a>
        <a
          href="#sixth"
          className={activeNav === "#sixth" ? "active" : ""}
          data-text="Contact"
        >
          <i className="far fa fa-phone"></i>
        </a>
      </nav>

      {/* Second Navigation Bar */}
      <nav className="navbar2">
        <a href="#header" data-text="Home">
          <i className="far fa fa-home"></i>
        </a>
        <a href="#first" data-text="About">
          <i className="far fa-user"></i>
        </a>
        <a href="#second" data-text="Experience">
          <i className="fas fa-briefcase"></i>
        </a>
        <a href="#third" data-text="Skills">
          <i className="icon fa fa-code"></i>
        </a>
        <a href="#fourth" data-text="Project">
          <i className="far fa-folder-open"></i>
        </a>
        <a href="#fifth" data-text="Education">
          <i className="far fa fa-school"></i>
        </a>
        <a href="#sixth" data-text="Contact">
          <i className="far fa fa-phone"></i>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
