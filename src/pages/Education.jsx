// src/pages/Education.js
import React from 'react';
import "/src/index.css";

function Education() {
  return (
    <div className="education-container">
      <section className="education-section">
        <h2>My Education Journey</h2>

        <div className="education-details">
          <h3>College</h3>
          <p>Currently pursuing a Bachelor's degree in Computer Science at Naga Colle Foundation.</p>
          <p>2023-2024</p>
        </div>

        <div className="education-details">
          <h3>Senior High School</h3>
          <p>Graduated from ACLC-NAGA in Year 2023.</p>
          <p>Track: TVL-Programming</p>
        </div>

        <div className="education-details">
          <h3>High School</h3>
          <p>Graduated from Sta.Cruz National High School Canaman in Year 2021</p>
        </div>

        <div className="education-details">
          <h3>Elementary School</h3>
          <p>Graduated from Canaman Central School in Year 2017.</p>
        </div>
        
      </section>
    </div>
  );
}

export default Education;
