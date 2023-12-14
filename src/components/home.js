import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Professional Home Page</h1>
        <p>Welcome to my professional website!</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          I am a passionate and skilled professional with expertise in various
          fields. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <div className="Project">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="Project">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </section>
      <footer className="App-footer">
        <p>Contact me at: contact@example.com</p>
      </footer>
    </div>
  );
}

export default App;
