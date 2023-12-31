import "./NavBar.css";

export const Navbar = () => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();

    if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(sectionId);
      if (section) {
        const offsetTop = section.offsetTop + 5;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };


  return (
    <div>
      {/* First Navigation Bar */}
      <nav className="navbar-container">
        <a href="/#" onClick={(e) => handleClick(e, "#")} aria-label="Home section">
          <i className="far fa fa-home"></i>
        </a>
        <a href="/#about" onClick={(e) => handleClick(e, "#about")} aria-label="About section">
          <i className="far fa-user"></i>
        </a>
        <a href="/#experience" onClick={(e) => handleClick(e, "#experience")} aria-label="Experience section">
          <i className="fas fa-briefcase"></i>
        </a>
        <a href="/#skills" onClick={(e) => handleClick(e, "#skills")} aria-label="Skills section">
          <i className="far fa-file-code"></i>
        </a>
        <a href="/#project" onClick={(e) => handleClick(e, "#project")} aria-label="Project section">
          <i className="far fa-folder-open"></i>
        </a>
        <a href="/#education" onClick={(e) => handleClick(e, "#education")} aria-label="Education section">
          <i className="far fa fa-school"></i>
        </a>
        <a href="/#contact" onClick={(e) => handleClick(e, "#contact")} aria-label="Contact section">
          <i className="far fa fa-phone"></i>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
