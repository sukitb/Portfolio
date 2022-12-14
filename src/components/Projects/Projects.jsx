import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import Jammming from "../../assets/ProjectSS/Jammming/jammming-sukitb.surge 1 (1).png";
import Colmar from "../../assets/ProjectSS/Colmar-academy/desktop.png";
import styled from "styled-components";
import Offit from "../../assets/ProjectSS/Offit/Offit.png"

export function Projects() {
  const projectsData = [
    {
      img: Offit,
      title: `Offit`,
      content: (
        <>
          A web application, built with MERN Stack. That allows users add edit remove exercise activity by using form.
        </>
      ),
      techlist: [
        {
          tech: `React`,
          href: `https://reactjs.org/`,
        },
        {
          tech: `Express`,
          href: `https://expressjs.com/`,
        },
        {
          tech: `MongoDB`,
          href: `https://www.mongodb.com/`,
        },
        {
          tech: `Node.js`,
          href: `https://nodejs.org/en/`,
        }
      ],
      github: `https://github.com/sukitb/Offit_Frontend`,
      demo: `https://offit.vercel.app/`,
    },
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

  const Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    height: auto;

    @media screen and (max-width: 768px) {
      padding: 0px;
      display: block;
      height: auto;
    }
  `;

  const Header = styled.div`
    width: 100%;
    text-align: right;
    border-bottom: 1px solid;
    margin-bottom: 20px;
  `;



  return (
    <Projects>
      <Header>
      <h2 className="red">PROJECTS</h2>
      </Header>
      {projectsData.map(({ img, title, content, techlist, github, demo }) => (
        <ProjectCard
          key={title}
          img={img}
          title={title}
          content={content}
          techlist={techlist}
          github={github}
          demo={demo}
        />
      ))}
    </Projects>
  );
}
