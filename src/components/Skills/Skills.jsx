import "./Skills.css";

const Skills = () => {
  return (
    <section id= "skills" className="tools">
      <h1> Skills</h1>
      <div className="user-skills">
        <div className="tech">
          <h2>Languages</h2>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-typescript-plain colored"></i>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain-wordmark colored"></i>
          <p>My favorite language for programming</p>
        </div>
        <div className="tech">
          <h2>Front-End</h2>
          <i className="devicon-react-original colored"></i>
          <i className="devicon-vuejs-plain"></i>
          <i className="devicon-svelte-plain colored"></i>
          <i className="devicon-bootstrap-plain-wordmark colored"></i>
          <i className="devicon-tailwindcss-plain colored"></i>
          <i className="devicon-handlebars-plain colored"></i>
          <p>My preferred technologies for front-end web development and component design.</p>
        </div>
        <div className="tech">
          <h2>Back-End</h2>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-express-original-wordmark"></i>          <i className="devicon-postgresql-plain-wordmark colored"></i>
          <i className="devicon-mysql-plain-wordmark"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-graphql-plain colored"></i>
          <p>My preferred technologies for back-end web programming and database architecture.</p>
        </div>
        <div className="tech">
          <h2>Tools</h2>
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-visualstudio-plain colored"></i>
          <i className="devicon-github-plain-wordmark colored"></i>
          <i className="devicon-docker-plain-wordmark colored"></i>
          <i className="devicon-slack-plain colored"></i>
          <i className="devicon-gitlab-plain colored"></i>
          <i className="devicon-figma-plain colored"></i>
          <i className="devicon-docker-plain colored"></i>
          <i className="devicon-bash-plain"></i>
          <i className="devicon-codepen-plain"></i>
          <i className="devicon-jest-plain colored"></i>
          <p>My preferred tools for code editing, sharing, wireframes, communication and testing</p>
        </div>
      </div>
      <div className="tools-slider">
        <div className="slider">
          <div className="tools-wrapper">
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-slack tools-icon"></i>
              </div>
              <span className="tools-description">Slack</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-git tools-icon"></i>
              </div>
              <span className="tools-description">Git</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-gitlab tools-icon"></i>
              </div>
              <span className="tools-description">Gitlab</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fas fa-cogs tools-icon"></i>
              </div>
              <span className="tools-description">Insomnia</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fas fa-building tools-icon"></i>
              </div>
              <span className="tools-description">Microsoft office</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fas fa-users tools-icon"></i>
              </div>
              <span className="tools-description">Teams</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-figma tools-icon"></i>
              </div>
              <span className="tools-description">Figma</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-vuejs tools-icon"></i>
              </div>
              <span className="tools-description">Vite</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fas fa-code tools-icon"></i>
              </div>
              <span className="tools-description">Vscode</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-docker tools-icon"></i>
              </div>
              <span className="tools-description">Docker</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fab fa-git-square tools-icon"></i>
              </div>
              <span className="tools-description">Git bash</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fas fa-terminal tools-icon"></i>
              </div>
              <span className="tools-description">Terminal</span>
            </div>
            <div className="tools-group">
              <div className="tools-icon-group">
                <i className="fas fa-dollar-sign tools-icon"></i>
              </div>
              <span className="tools-description">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

