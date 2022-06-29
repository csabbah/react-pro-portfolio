import React from 'react';

const Project = ({ title, stack, image_url }) => {
  return (
    <div id="single-project">
      <div id="project-details">
        <h1 id="project-title">{title}</h1>
        <p id="project-stack">{stack}</p>
      </div>
      <img
        id="project-image"
        src={image_url}
        alt="Preview image of the weather dashboard website"
      />
    </div>
  );
};

export default Project;