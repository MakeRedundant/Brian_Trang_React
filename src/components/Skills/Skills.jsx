import "./Skills.css";

const Skills = () => {
  return (
    <section id= "skills" className="tools">
      <h2 className="tools__titulo titulo__dark">Skills</h2>
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
              <span className="tools__descripcion titulo__dark">figma</span>
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

