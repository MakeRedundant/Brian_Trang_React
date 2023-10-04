import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id='fifth'>
      <h1>Education</h1>
      <div className="text-box">
        <div className="university">
          <img src="assets/USYD.png" alt="University of Sydney Logo" />
          <p>Full stack web development - <span>University of Sydney</span></p>
        </div>
        <div className="university">
          <img src="assets/UNSW.png" alt="University of New South Wales Logo" />
          <p>Master of Optometry - <span>University of New South Wales</span></p>
        </div>
        <div className="university">
          <p>Bachelor of Vision Science - <span>University of New South Wales</span></p>
        </div>
      </div>
    </section>
  );
};

export default Education;


