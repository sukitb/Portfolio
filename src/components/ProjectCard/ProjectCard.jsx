import React from "react";
import styled from "styled-components";
import { Github } from "@icons-pack/react-simple-icons";
import { VscGithub } from "react-icons/vsc";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { HiOutlineExternalLink } from "react-icons/hi";

import "../../global.sass";

export function ProjectCard(props) {
  const TechList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0px;
    & li {
      
      padding: 0px 10px;
    }
  `;

  const ProjectCard = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-bottom: 100px;
    
  `;

  const ProjectDetail = styled.div`
    background-color: #1B2027;
    display: flex;
    flex-direction: column;
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    z-index: 1;
    padding: 30px;
    box-shadow: 0 19px 38px black;

    @media only screen and (max-width: 768px) {
      grid-column: 1/5;
      grid-row: 4;
    }
  `;

  const Title = styled.h3`
    font-weight: bold;
  `;

  const Content = styled.p`
    line-height: 1.5;
  `;

  const Menu = styled.div``;

  const Img = styled.div`
    grid-column: 1 / 4;
    grid-row: 1 / 4;

    @media only screen and (max-width: 768px) {
      grid-column: 1/5;
      grid-row: 1/3;
    }

    & img {
      max-width: 100%;
    }
  `;

  const StyledGithub = styled(VscGithub)`
    width: 30px;
    height: 30px;
    fill: #b9bbb3;

    &:hover {
      fill: #ff7b72;
    }

    padding: 0px 5px;
  `;
  const StyledExternalLinkIcon = styled(HiOutlineExternalLink)`
    width: 30px;
    height: 30px;
    color: #b9bbb3;
    padding: 0px 5px;

    &:hover {
      color: #ff7b72;
    }
  `;

  return (
    <ProjectCard>
      <ProjectDetail>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
        <TechList>
          {props.techlist.map(({ tech, href }) => (
            <a target="_blank" className="underline-hover-effect" href={href}><li>{tech}</li></a>
          ))}
        </TechList>
        <Menu>
          <a href={props.github} target="_blank">
            <StyledGithub />
          </a>
          <a href={props.demo} target="_blank">
            <StyledExternalLinkIcon />
          </a>
        </Menu>
      </ProjectDetail>
      <Img>
        <img src={props.img}></img>
      </Img>
    </ProjectCard>
  );
}
