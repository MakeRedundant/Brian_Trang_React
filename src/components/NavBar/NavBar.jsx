import './nav.css';

const NavBar = () => {
  return (
    <nav>
      <a href="#zero" data-text="Home">
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
  );
};

export default NavBar;
