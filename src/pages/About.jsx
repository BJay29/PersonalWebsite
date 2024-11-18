// src/pages/About.js
import React from 'react';
import "/src/index.css";

function About() {
  return (
    <section className="about"> 
      <div className="about-content">
        <h1>Hello, I'm BeeJay</h1>
        <h2>A Computer Science Student</h2>
        <p>
          "I’m a Computer Science student passionate about technology, web development, and problem-solving. 
          My journey has given me skills in coding, logical thinking, and creative solutions. From building websites to designing algorithms, I’m always eager to learn and grow."
        </p>

        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>Programming Languages: React, NodeJS, C, C++</li>
            <li>Web Development: HTML, CSS, React.js, Node.js</li>
            <li>Database Management: MySQL</li>
            <li>Tools: Github, Visual Studio Code, Thunder Client</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
