import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const project = [
    {
      title: 'Weather Dashboard',
      stack: 'JS',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
    {
      title: 'Petters',
      stack: 'MVC',
      image_url: 'https://i.imgur.com/ASmFJo8.png',
    },
  ];

  return (
    <div id="portfolio">
      <h1 id="main-section-header">My Portfolio</h1>
      <div id="portfolio-wrapper">
        {project.map((item, id) => {
          return (
            <Project
              key={id}
              title={item.title}
              stack={item.stack}
              image_url={item.image_url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
