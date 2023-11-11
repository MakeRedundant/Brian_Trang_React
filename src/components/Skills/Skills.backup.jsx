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

