import React, { useEffect, useState } from "react";
import "./NavBar.css";

export const Navbar = () => {
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
      <nav className="navbar-container">
        <a
          href="#header"
          className={activeNav === "#header" ? "active" : ""}
          data-text="Home"
        >
          <i className="far fa fa-home"></i>
        </a>
        <a
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
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
          href="#project"
          className={activeNav === "#project" ? "active" : ""}
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
    </div>
  );
};

export default Navbar;
