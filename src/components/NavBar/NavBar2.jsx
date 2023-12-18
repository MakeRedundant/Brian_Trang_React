import "./NavBar2.css";

const NavBar2 = () => {
  return (
    <nav className="navbar2">
      {/* Second Navigation Bar */}
      <div className="navbar2-container">
        <a href="#header">
          <i className="far fa fa-home"></i>
          Home
        </a>
        <a href="#about">
          <i className="far fa-user"></i>
          About
        </a>
        <a href="#experience">
          <i className="fas fa-briefcase"></i>
          Experience
        </a>
        <a href="#skills">
          <i className="far fa-file-code"></i>
          Skills
        </a>
        <a href="#project">
          <i className="far fa-folder-open"></i>
          Project
        </a>
        <a href="#education">
          <i className="far fa fa-school"></i>
          Education
        </a>
        <a href="#contact">
          <i className="far fa fa-phone"></i>
          Contact || Resume
        </a>
      </div>
    </nav>
  );
};

export default NavBar2;
