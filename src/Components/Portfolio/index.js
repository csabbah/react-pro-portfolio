import React from "react";
import Project from "../Project";

const Portfolio = () => {
  const project = [
    {
      // nameOfClass: 'recent',
      title: "Pizza Shack",
      stack: "Next.js",
      image_url: "https://imgpile.com/images/TcrmbX.png",
      image_alt: "Preview image of the Pizza Shack website",
      github_link: "https://github.com/csabbah/nextjs-pizza-shack",
      deployed_link: "https://nextjs-pizza-shack.vercel.app/",
    },
    {
      // nameOfClass: 'recent',
      title: "Anime Finder",
      stack: "MERN - GraphQL",
      image_url: "https://imgpile.com/images/bRdCWX.png",
      image_alt: "Preview image of the Anime Finder website",
      github_link: "https://github.com/csabbah/mern-anime-finder",
      deployed_link: "https://cs-anime-finder.vercel.app/",
    },
    {
      // nameOfClass: 'recent',
      title: "Real Estate",
      stack: "Next.js",
      image_url: "https://imgpile.com/images/Tk53Io.png",
      image_alt: "Preview image of the Real Estate website",
      github_link: "https://github.com/csabbah/nextjs-realestate",
      deployed_link: "https://nextjs-realestate-jgo6.vercel.app/",
    },
    {
      // nameOfClass: 'recent',
      title: "Realtime chat",
      stack: "Socket.io",
      image_url: "https://imagizer.imageshack.com/img922/7127/CoyWMl.png",
      image_alt: "Preview image of Realtime chat app website",
      github_link: "https://github.com/csabbah/realtime-chat-app",
      deployed_link: "https://cs-realtime-chatapp.herokuapp.com/",
    },
    {
      // nameOfClass: 'recent',
      title: "Locum",
      stack: "MERN - GraphQL",
      image_url: "https://imagizer.imageshack.com/img923/8669/XZ4Dv3.png",
      image_alt: "Preview image of the Locum website",
      github_link: "https://github.com/csabbah/mern-locum-staffing",
      deployed_link: "https://mern-locum-staffing.vercel.app/",
    },
    {
      // nameOfClass: 'recent',
      title: "Deck Builder",
      stack: "MERN - TS",
      image_url: "https://i.postimg.cc/ZnjvPq08/Prev.png",
      image_alt: "Preview image of the Deck Builder website",
      github_link: "https://github.com/csabbah/mern-ts-deck-builder",
      deployed_link: "https://csflashdeckcards.com/",
    },
    {
      title: "Petters",
      stack: "MVC",
      image_url: "https://imgpile.com/images/RK0ExF.png",
      image_alt: "Preview image of the MVC Petters Social website",
      github_link: "https://github.com/csabbah/interactive-proj2-petters",
      deployed_link: "https://petters-social.herokuapp.com/",
    },
    {
      // nameOfClass: 'recent',
      title: "Book search",
      stack: "MERN",
      image_url: "https://i.postimg.cc/LXZJGgng/Book-Search.png",
      image_alt: "Preview image of the Book search website",
      github_link: "https://github.com/csabbah/mern-book-search",
      deployed_link: "https://mern-book-search.vercel.app/",
    },
    {
      title: "Budget Tracker",
      stack: "PWA",
      image_url: "https://imgpile.com/images/Rzd1ic.png",
      image_alt: "Preview image of the Budget Tracker website",
      github_link: "https://github.com/csabbah/pwa-budget-tracker",
      deployed_link: "https://cspwa-budget-tracker.herokuapp.com/",
    },
    {
      title: "Wearther",
      stack: "API - JS",
      image_url: "https://i.imgur.com/kIy7DhY.png",
      image_alt: "Preview image of the Wearther website",
      github_link: "https://github.com/csabbah/interactive-proj-wearther",
      deployed_link:
        "https://wearther-a-squad.github.io/interactive-proj-wearther/",
    },
    {
      title: "Note Taker",
      stack: "Fullstack JS",
      image_url: "https://i.imgur.com/8omghek.png",
      image_alt: "Preview image of the Full stack note taker website",
      github_link: "https://github.com/csabbah/full-stack-note-taker",
      deployed_link: "https://fullstack-note-taker.herokuapp.com/notes/",
    },
    {
      title: "Weather Dash",
      stack: "API - JS",
      image_url: "https://i.imgur.com/ASmFJo8.png",
      image_alt: "Preview image of the Budget Tracker website",
      github_link: "https://github.com/csabbah/smart-weather-dashboard",
      deployed_link: "https://csabbah.github.io/smart-weather-dashboard/?#",
    },
    {
      title: "TaskMaster",
      stack: "jQuery",
      image_url: "https://i.imgur.com/4PYAPJW.png",
      image_alt: "Preview image of the Taskmaster website",
      github_link: "https://github.com/csabbah/taskmaster-pro",
      deployed_link: "https://csabbah.github.io/taskmaster-pro/",
    },
    {
      title: "Practice Proj 1",
      stack: "HTML, CSS & JS",
      image_url: "https://i.imgur.com/lKHy9RW.png",
      image_alt: "Preview image of the Practice Project 1 website",
      github_link: "https://github.com/csabbah/Project-1",
      deployed_link: "https://csabbah.github.io/Project-1/",
    },
    {
      title: "Practice Proj 4",
      stack: "HTML, CSS & JS",
      image_url: "https://i.imgur.com/q61WAw1.jpg",
      image_alt: "Preview image of the Practice Project 4 website",
      github_link: "https://github.com/csabbah/Project-4",
      deployed_link: "https://csabbah.github.io/Project-4/",
    },
    {
      title: "Practice Proj 9",
      stack: "HTML & CSS",
      image_url: "https://i.imgur.com/UGh55Qi.jpg",
      image_alt: "Preview image of the Practice Project 9 website",
      github_link: "https://github.com/csabbah/Project-9",
      deployed_link: "https://csabbah.github.io/Project-9/",
    },
  ];

  return (
    <div id="portfolio">
      <h1 id="main-section-header">My Portfolio</h1>
      <hr id="main-section-hr" />
      <div id="portfolio-wrapper">
        {project.map((item, id) => {
          return (
            <Project
              key={id}
              title={item.title}
              stack={item.stack}
              image_url={item.image_url}
              image_alt={item.image_alt}
              github_link={item.github_link}
              deployed_link={item.deployed_link}
              nameOfClass={item.nameOfClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
