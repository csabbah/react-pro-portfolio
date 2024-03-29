import React from "react";

const Project = ({
  title,
  stack,
  image_url,
  image_alt,
  github_link,
  deployed_link,
  nameOfClass,
}) => {
  return (
    <div id="project-outter-wrapper">
      <div id="single-project">
        <div id="project-details">
          <h1 id="project-title">{title}</h1>
          <p id="project-stack">{stack}</p>
        </div>
        <img
          className={nameOfClass}
          id="project-image"
          src={image_url}
          alt={image_alt}
        />
      </div>
      <div id="project-bottom-section">
        <div id="project-links">
          <a target="_blank" rel="noreferrer noopener" href={github_link}>
            Github
          </a>
          <a target="_blank" rel="noreferrer noopener" href={deployed_link}>
            Live Link
          </a>
        </div>
        <div id="project-desc">
          <p>{title}</p>
          <p>{stack}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
