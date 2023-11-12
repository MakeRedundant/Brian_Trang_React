import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div className="section__wrapper">
        <div className="terminal__format">
          <div className=" terminal_toolbar">
            <div className="terminal-button">
              <button className="btn btn__red btn-color"></button>
              <button className="btn btn__yellow"></button>
              <button className="btn btn__green"></button>
            </div>
            <p className="user">briandev@admin: Experience ~</p>
          </div>
          <div className="terminal__content" id="text">
            <h3 className="terminal__content">
              <span className="text-highlight">Bankstown Hospital </span>
            </h3>
            <p className="terminal-year">
            2021 - Present
            </p>

            <p className="terminal-job-position">
            Senior Optometrist
            </p>

            <p className="terminal__content">
            Led seamless clinic operations and consistently achieved deadlines in a multidisciplinary practice. <br/>
            In collaboration with the University of New South Wales, responsibilities included mentorship and training 16 final year students during their clinical rotation (an increase from 2022 of 25%). <br/>
            Assured clear communication between other health professionals of different disciplines and patients, requiring the ability to work well in a team or independently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
