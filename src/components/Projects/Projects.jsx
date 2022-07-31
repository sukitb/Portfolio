import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import Jammming from "../../assets/ProjectSS/Jammming/jammming-sukitb.surge 1 (1).png";
import Colmar from "../../assets/ProjectSS/Colmar-academy/desktop.png"
import { Anchor } from "../Anchor/Anchor";

export function Projects() {
  [];

  const projectsData = [
    {
      img: Jammming,
      title: `Jammming`,
      content: (
        <>
          A web application, built with React.js, that allows users to search
          the Spotify library, create a custom playlist, and then save the
          playlist to their Spotify accounts.
        </>
      ),
      techlist: [
        {
          tech: `React`,
          href: `https://reactjs.org/`,
        },
        {
          tech: `Spotify API`,
          href: `https://developer.spotify.com/documentation/web-api/`,
        },
        {
          tech: `Surge`,
          href: `https://surge.sh/`,
        },
      ],
      github: `https://github.com/sukitb/jammming`,
      demo: `https://jammming-sukitb.surge.sh/`,
    },
    {
      img: Colmar,
      title: `COLMAR ACADEMY`,
      content: (
        <>
          Responsive landing page for school. Using HTML, CSS, Bootstrap and
          GitHub pages.
        </>
      ),
      techlist: [
        {
          tech: `HTML`,
          href: `https://developer.mozilla.org/en-US/docs/Web/HTML`,
        },
        {
          tech: `CSS`,
          href: `https://developer.mozilla.org/en-US/docs/Web/CSS`,
        },
        {
          tech: `Bootstrap`,
          href: `https://getbootstrap.com/`,
        },
        {
            tech: `GitHub Pages`,
            href: `https://docs.github.com/en/pages`,
          },
      ],
      github: `https://github.com/sukitb/colmar-academy`,
      demo: `https://sukitb.github.io/colmar-academy/`,
    },
  ];

  return (
    <div className="Projects">
        <h2 className="highlight">PROJECTS</h2>
      {projectsData.map(({ img, title, content, techlist, github, demo }) => (
        <ProjectCard
          img={img}
          title={title}
          content={content}
          techlist={techlist}
          github={github}
          demo={demo}
        />
      ))}
    </div>
  );
}
