import React from "react";

export function ProjectCard(props) {
  return (
    <div className="ProjectCard">
      <div className="project-content">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div className="project-img">
        <img src={props.img} />
      </div>
    </div>
  );
}
