import React from 'react';

const Resume = () => {
  return (
    <div id="resume">
      <h1 id="main-section-header">Resume</h1>
      <hr id="main-section-hr" />
      <a
        id="resume-link"
        href={`./Assets/Resume/Carlos'Resume(2022_may).pdf`}
        download
      >
        Download my Resume here
      </a>
      <div id="resume-wrapper">
        <div id="backend">
          <h1>Backend Proficiencies</h1>
          <ul>
            <li>Express</li>
            <li>Heroku</li>
            <li>MongoDB</li>
            <li>SQLite</li>
            <li>MySQL / NoSQL</li>
            <li>IndexedDB</li>
            <li>LocalStorage</li>
            <li>Service Worker</li>
            <li>PWA, OOP, MVC & ORM</li>
          </ul>
        </div>
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
            <li>jQuery & jQueryUI</li>
          </ul>
        </div>
        <div id="dev-tools">
          <h1>Dev Tool Proficiencies</h1>
          <ul>
            <li>Git</li>
            <li>npm</li>
            <li>Jest</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
