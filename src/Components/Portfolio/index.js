import React from 'react';
import Project from '../Project';

const index = () => {
  // Update the below object to contain multiple real projects
  // For now, add the same image for testing and update the gallery CSS sstyling
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

export default index;
