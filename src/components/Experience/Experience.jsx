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
            As the <span className="text-highlight">senior Optometrist</span> at a multidisciplinary ophthalmic practice and the first contact for all patients.
            The expected duties requiring demonstrating expertise in triaging and obtaining comprehensive medical histories to ensure accurate diagnoses and tailored treatment plans.
            Utilizing advanced diagnostic equipment as the senior optometrist I was the only clinician at the practice proficient with Optos Ultra-widefield retinal imaging.
            Led seamless clinic operations and consistently achieved deadlines in a multidisciplinary practice. <br/>
              <span className="text-highlight">Mentoring and training:</span> In collaboration with the University of New South Wales, responsibilities included mentorship and training 16 final year students during their clinical rotation (an increase from 2022 of 25%). <br/>
              <span className="text-highlight">Communication:</span> Assured clear communication between other health professionals of different disciplines and patients, requiring the ability to work well in a team or independently. <br/>
            </p>
          </div>
          <div className="terminal__content" id="text">
            <h3 className="terminal__content">
              <span className="text-highlight">PersonalEyes </span>
            </h3>
            <p className="terminal-year">
            2018-2022
            </p>

            <p className="terminal-job-position">
            Orthoptist/Refractive Consultant
            </p>
            <p className="terminal__content">
            Provided refractive consultants for eligibility and collaboration.
            Conducted comprehensive patient consultations, explaining refractive assessment results and recommended treatment options (LASIK, PRK, ICL, SMILE). <br/>
            Embraced <span className="text-highlight">continuous learning</span>  by staying up to date with the latest technologies, innovations and research in refractive wavefront analysis and corneal topography. <br/>
            Led the practice in transitioning from paper based to electronic medical practice software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
