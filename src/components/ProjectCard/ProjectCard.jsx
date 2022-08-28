import React from "react";
import styled from "styled-components";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
import "../../global.sass";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";

export function ProjectCard(props) {
  const TechList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0px;
    & li {
      padding: 0px 10px;
    }

    @media only screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  `;

  const ProjectCard = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    margin-bottom: 100px;
    
  `;

  const ProjectDetail = styled.div`
    background-color: #1b2027de;
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

  const Menu = styled.div`
  
    display: flex;
    
    a {
      
      margin: 10px 30px;
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      a {
      height: 70px;
      margin: 10px 30px;
    }
    }
  `;

    const Img = styled.div`
    grid-column: 1 / 4;
    grid-row: 1 / 4;

    img {
      width: 700px;
    }

    @media only screen and (max-width: 768px) {
      grid-column: 1/5;
      grid-row: 1/3;
    }

    & img {
      max-width: 100%;
    }
  `;


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    
    transition: {
      type: "tween",
    }
  },
};



  return (
    <ProjectCard>
      
      <ProjectDetail>
      <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          
        >
          
        <Title><motion.a variants={item} href={props.demo} target="_blank">{props.title}</motion.a></Title>
        <motion.div variants={item} >
        <Content>{props.content}</Content>
        <TechList>
          {props.techlist.map(({ tech, href }) => (
            <a target="_blank" className="underline-hover-effect" href={href}><li>{tech}</li></a>
          ))}
        </TechList>
        <Menu>
          
          <Button text="REPO" icon={<><VscGithub/></>} href={props.github} blank={true} />
          <Button text="DEMO" icon={<><HiOutlineExternalLink/></>} href={props.demo} blank={true} />
          
        </Menu>
        </motion.div>
        </motion.div>
      </ProjectDetail>
      
      
      <Img>
      <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
        <motion.img variants={item} src={props.img}></motion.img>
        </motion.div>
      </Img>
      
    </ProjectCard>
  );
}
