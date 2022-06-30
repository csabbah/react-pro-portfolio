import React from 'react';

const About = () => {
  return (
    <div id="about">
      <h1 id="main-section-header">About me</h1>
      <hr id="main-section-hr" />
      <div id="about-wrapper">
        <img
          id="portrait"
          src="https://i.imgur.com/dApqIHX.png"
          alt="Portrait of me (Carlos)"
        />
        <div id="about-inner-wrapper">
          <h1>Hi, i'm Carlos!</h1>
          <p>
            I'm an aspiring Full stack developer with over 7 years of experience
            in marketing and content creation. I have unique eye for creativity,
            love to solve critical problems and a keen to always improve and
            learn more.
            <br />
            <br />
            Certified in advanced Python (API, automation, web scraping & data
            analysis), HTML, CSS, MySQL (sqlite2), JavaScript (Node.js,
            Express.js, Sequelize, Heroku, Sessions, Handlebars, working with
            API (POST, GET, DELETE & PUT), jQuery, React.js, Bootstrap,
            localStorage & Tailwind/DaisyUi) & experienced in different
            development structures such as TDD, OOP, ORM & MVC. Lastly, an
            expert in all adobe programs including, Premiere, After effects,
            Illustrator, Photoshop & XD.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
