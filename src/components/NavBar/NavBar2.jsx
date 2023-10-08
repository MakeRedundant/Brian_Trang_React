import "./NavBar2.css";

const NavBar2 = () => {
  return (
    <nav className="navbar2">
      {/* Second Navigation Bar */}
      <div className="navbar2-container">
        <a href="#header" data-text="Home">
          <i className="far fa fa-home"></i>
          Home
        </a>
        <a href="#first" data-text="About">
          <i className="far fa-user"></i>
          About
        </a>
        <a href="#second" data-text="Experience">
          <i className="fas fa-briefcase"></i>
          Experience
        </a>
        <a href="#third" data-text="Skills">
          <i className="icon fa fa-code"></i>
          Skills
        </a>
        <a href="#fourth" data-text="Project">
          <i className="far fa-folder-open"></i>
          Project
        </a>
        <a href="#fifth" data-text="Education">
          <i className="far fa fa-school"></i>
          Education
        </a>
        <a href="#sixth" data-text="Contact">
          <i className="far fa fa-phone"></i>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar2;
