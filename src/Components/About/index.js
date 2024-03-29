import React from "react";

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
          <h1>Hi, I'm Carlos!</h1>
          <p>
            I am Full stack developer with over 7 years of experience in
            marketing and content creation. I have a unique eye for creativity,
            love to solve critical problems and a keen to always improve and
            learn more.
            <br />
            <br />
            Advanced Python (API, automation, web scraping & data analysis).
            <br />
            <br />
            HTML, CSS, MySQL (sqlite2), NoSQL (MongoDB), Apollo Client, GraphQL,
            Axios, Heroku, Vercel, Hostinger, REST API, VPS, Mongo Atlas,
            TypeScript, JavaScript (Node.js, Next.js, React.js, Redux,
            Express.js, Sequelize, Mongoose, jQuery, Bootstrap, localStorage,
            indexedDB, Tailwind & DaisyUi) & MERN, MVC, PWA, TDD, OOP & ORM.
            ORM.
            <br />
            <br />
            Expert in all adobe programs including, Premiere, After effects,
            Illustrator & Photoshop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
