import React from "react";

const Resume = () => {
  return (
    <div id="resume">
      <h1 id="main-section-header">Resume</h1>
      <hr id="main-section-hr" />
      <a
        id="resume-link"
        href={`./Assets/Resume/Carlos'Resume_22.pdf`}
        download
      >
        Download my Resume
      </a>
      <div id="resume-wrapper">
        <div id="backend">
          <h1>Backend Proficiencies</h1>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>Hostinger</li>
            <li>Vercel</li>
            <li>Heroku</li>
            <li>VPS</li>
            <br></br>
            <li>MySQL / NoSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>SQLite</li>
            <li>GraphQl</li>
            <br></br>
            <li>Redux</li>
            <li>IndexedDB</li>
            <li>LocalStorage</li>
            <li>PWA, OOP, TTD & ORM</li>
            <li>Python</li>
          </ul>
        </div>
        <div id="frontend">
          <h1>Frontend Proficiencies</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <br></br>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
            <li>DaisyUi</li>
            <li>jQuery</li>
            <li>jQueryUi</li>
            <br></br>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>After Effects</li>
            <li>Premiere</li>
          </ul>
        </div>
        <div id="dev-tools">
          <h1>Dev Tool Proficiencies</h1>
          <ul>
            <li>Git</li>
            <li>Source control</li>
            <li>Npm</li>
            <li>Jest</li>
            <br></br>
            <li>Github</li>
            <li>Vscode</li>
            <br></br>
            <li>Pycharm</li>
            <li>Webpack</li>
            <br></br>
            <li>Insomnia</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
