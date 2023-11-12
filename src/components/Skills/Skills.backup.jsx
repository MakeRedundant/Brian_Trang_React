import "./Skills.css";

const Skills = () => {
  return (
    <section className="tools">
      <h2 className="tools__titulo titulo__dark">Tools</h2>
      <div className="tools__caja__slider">
        <div className="slider">
          <div className="tools__cajas">
            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-slack tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">slack</span>
            </div>

            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-airtable tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">airtable</span>
            </div>

            <div className="tools__grupo">
              <div className="tools__caja caja__dark">
                <i className="fab fa-git tools__icono tool__dark"></i>
              </div>
              <span className="tools__descripcion titulo__dark">git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const Skills = () => {
  return (
    <section id='skills'>
      <h1>Skills</h1>
      <table className="skills-table">
        <tbody>
          <tr>
            <th>LANGUAGES</th>
            <td><i className="fab fa-js"></i>JavaScript/TypeScript, <i className="fab fa-html5"></i> HTML/CSS, <i
              className="fab fa-java"></i>Java, <i className="fab fa-python"></i> Python</td>
          </tr>
          <tr>
            <th>FRAMEWORKS&amp;MAJOR LIBRARIES</th>
            <td>
              <i className="fab fa-node-js"></i>Express.js, <i className="fas fa-file-code"></i>Handlebars.js, <i
                className="fab fa-react"></i> React, <i className="fab fa-vuejs"></i> Vue,
              <i className="fab fa-bootstrap"></i> Bootstrap CSS, <i className="fab fa-jest"></i>Jest, <i
                className="fas fa-database"></i> SQL Server, <i className="fab fa-css3-alt"></i>Tailwind CSS
            </td>
          </tr>
          <tr>
            <th>DATABASES</th>
            <td><i className="fas fa-database"></i>SQL, <i className="fas fa-database"></i> MongoDB </td>
          </tr>
          <tr>
            <th>DEPENDENCIES</th>
            <td><i className="fas fa-code"></i> ESLint, <i className="fas fa-cogs"></i> dotenv, <i className="fas fa-key"></i> bcrypt
            </td>
          </tr>
          <tr>
            <th>DEPLOYMENT</th>
            <td><i className="fab fa-heroku"></i> Heroku</td>
          </tr>
          <tr>
            <th>TOOLS</th>
            <td>
              <i className="fab fa-git"></i> Git, <i className="fab fa-gitlab"></i>Gitlab, <i className="fas fa-code"></i>Insomnia,
              <i className="fas fa-database"></i>MongoDB Compass, <i className="fas fa-database"></i>SQL Workbench, <i
                className="fab fa-slack"></i>Slack,
              <i className="fab fa-microsoft"></i>Microsoft Office + Teams, <i className="fab fa-figma"></i>Figma
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Skills;