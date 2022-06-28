import React from 'react';

// Update the CSS styling to each project and modify the elements
const index = ({ projectsArr }) => {
  const { title, description, image_url } = projectsArr;
  return (
    <div id="single-project">
      <h1 id="project-title">{title}</h1>
      <p id="project-description">{description}</p>
      <p id="project-image">{image_url}</p>
    </div>
  );
};

export default index;
