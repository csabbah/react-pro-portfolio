import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const project = [
    {
      nameOfClass: 'recent',
      title: 'Locum',
      stack: 'MERN',
      image_url: 'https://imgpile.com/images/RpTFz8.png',
      image_alt: 'Preview image of the Locum website',
      github_link: 'https://github.com/SCScbc-Projects2022/project-three',
      deployed_link: 'https://locum-staffing.herokuapp.com/',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://imgpile.com/images/RK0ExF.png',
      image_alt: 'Preview image of the MVC Petters Social website',
      github_link: 'https://github.com/csabbah/interactive-proj2-petters',
      deployed_link: 'https://mvc-petters-social.herokuapp.com/',
    },
    {
      title: 'Budget Tracker',
      stack: 'PWA',
      image_url: 'https://imgpile.com/images/Rzd1ic.png',
      image_alt: 'Preview image of the Budget Tracker website',
      github_link: 'https://github.com/csabbah/pwa-budget-tracker',
      deployed_link: 'https://fullpwa-budget-tracker.herokuapp.com/',
    },
    {
      title: 'Wearther',
      stack: 'API - JS',
      image_url: 'https://i.imgur.com/kIy7DhY.png',
      image_alt: 'Preview image of the Wearther website',
      github_link: 'https://github.com/csabbah/interactive-proj-wearther',
      deployed_link:
        'https://wearther-a-squad.github.io/interactive-proj-wearther/',
    },
    {
      title: 'Note Taker',
      stack: 'Fullstack JS',
      image_url: 'https://i.imgur.com/8omghek.png',
      image_alt: 'Preview image of the Full stack note taker website',
      github_link: 'https://github.com/csabbah/full-stack-note-taker',
      deployed_link: 'https://full-stack-note-taker.herokuapp.com/',
    },
    {
      title: 'Weather Dash',
      stack: 'API - JS',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
      image_alt: 'Preview image of the Budget Tracker website',
      github_link: 'https://github.com/csabbah/smart-weather-dashboard',
      deployed_link: 'https://csabbah.github.io/smart-weather-dashboard/?#',
    },
    {
      title: 'TaskMaster',
      stack: 'jQuery/jQueryui',
      image_url: 'https://i.imgur.com/4PYAPJW.png',
      image_alt: 'Preview image of the Taskmaster website',
      github_link: 'https://github.com/csabbah/taskmaster-pro',
      deployed_link: 'https://csabbah.github.io/taskmaster-pro/',
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
