import React from 'react';

const Resume = () => {
  return (
    <div id="resume">
      <h1 id="main-section-header">Resume</h1>

      <a href={`./Assets/Resume/Carlos'Resume(2022_may).pdf`} download>
        Download my Resume here
      </a>
      <div id="frontend">
        <h1>Frontend Proficiencies</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>DaisyUi</li>
          <li>jQuery and jQueryUI</li>
        </ul>
      </div>
      <div id="dev-tools">
        <h1>Dev Tools Proficiencies</h1>
        <ul>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
        </ul>
      </div>
      <div id="backend">
        <h1>Backend Proficiencies</h1>
        <ul>
          <li>Express</li>
          <li>Heroku</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>SQLite</li>
          <li>IndexedDB</li>
          <li>LocalStorage</li>
          <li>Service Worker</li>
          <li>PWA, OOP, MVC and ORM development</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
