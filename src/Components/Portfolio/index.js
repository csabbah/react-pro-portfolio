import React from 'react';
import Project from '../Project';

const index = () => {
  // Update the below object to contain multiple real projects
  // For now, add the same image for testing and update the gallery CSS sstyling
  const project = {
    title: 'title',
    description: 'Description',
    image_url: 'url',
  };

  return (
    <div id="portfolio">
      {/* Map the projects and reutnr multiple  <Project></Project> components */}
      <Project projectsArr={project} />
    </div>
  );
};

export default index;
