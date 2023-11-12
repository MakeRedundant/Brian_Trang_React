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
          <p>My preferred tools for version control, code editing, and container orchestration.</p>
        </div>
      </div>
      <h2>My Tools</h2>
      <div className="tools__caja__slider">
        <div className="slider">
          <div className="tools__cajas">
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-slack tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Slack</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-git tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Git</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-gitlab tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Gitlab</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fas fa-cogs tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Insomnia</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fas fa-building tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Microsoft office</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fas fa-users tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Teams</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-figma tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Figma</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-vuejs tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Vite</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fas fa-code tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Vscode</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-docker tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Docker</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-git-square tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Git bash</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fas fa-terminal tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Terminal</span>
            </div>
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fas fa-dollar-sign tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

