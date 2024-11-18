import React from 'react';
import '/src/index.css';

function Hobbies() {
  return (
    <section className="hobbies-section">
      <h2 className="hobbies-title">My Hobbies</h2>

      <div className="hobby">
        <h3>Mobile Games</h3>
        <p>
          I love playing mobile games during my free time, like mobile legends, Clash of Clans.
        </p>
      </div>

      <div className="hobby">
        <h3>Watching Movies & Anime</h3>
        <p>
          Watching movies and anime is one of my favorite hobbies. I enjoy exploring different genres, and anime provides a unique storytelling experience that fascinates me.
        </p>
      </div>

      <div className="hobby">
        <h3>Creating Websites</h3>
        <p>
          I enjoy creating websites, experimenting with web development technologies, and designing responsive, user-friendly interfaces. It's both fun and a valuable skill.
        </p>
      </div>
    </section>
  );
}

export default Hobbies;
