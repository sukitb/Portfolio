import React from "react";
import styled from "styled-components";
import { VscGithub } from "react-icons/vsc";
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
    & a {
      font-weight: bold;
      color: #b9bbb3;
      box-shadow: inset 0 0 0 0 #ff7b72;
      
      margin: 0 -.25rem;
      padding: 0 .25rem;
      transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
      
      &:hover {
        color: #1b2027;
        box-shadow: inset 200px 0 0 0 #ff7b72;
        
      }
    }
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
    padding: 0px 5px;

    &:hover {
      fill: #ff7b72;
    }

    @media only screen and (max-width: 768px) {
      
    }
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
        <Title><a href={props.demo} target="_blank">{props.title}</a></Title>
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
