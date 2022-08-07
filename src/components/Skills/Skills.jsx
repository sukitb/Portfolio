import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMarkdown } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";

export function Skills() {


  const Skills = styled.div``;

  const List = styled.div`
    margin: 50px auto;

    ul {
      padding: 0px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
    }

    & svg {
      width: 50px;
      height: 50px;
      margin: 15px 15px;
    }

    @media only screen and (max-width: 768px) {
      margin: 0px;

      & svg {
        width: 40px;
        height: 40px;
        padding: 10px;
      }
    }
  `;

  const iconContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
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


  const skillsList = [
    <SiHtml5 fill="#E34F26" />,
    <SiCss3 fill="#1572B6" />,
    <SiReact fill="#61DAFB" />,
    <SiBootstrap fill="#7952B3" />,
    <SiNodedotjs fill="#339933" />,
    <SiExpress fill="#E6E7E4" />,
    <SiMarkdown fill="#E6E7E4" />,
    <SiVisualstudiocode fill="#007ACC" />,
    <SiGit fill="#F05032" />,
    <SiGithub fill="#E6E7E4" />,
    <SiFigma fill="#F24E1E" />,
  ];

  return (
    <Skills>
      <List>
        <motion.ul
          variants={iconContainer}
          initial="hidden"
          whileInView="visible"
          
        >
          {skillsList.map((icon) => (
            <motion.li variants={item}>
              <React.Fragment>{icon}</React.Fragment>
            </motion.li>
          ))}
        </motion.ul>
      </List>
    </Skills>
  );
}

{
  /* <SiHtml5 fill="#E34F26" />
          <SiCss3 fill="#1572B6" />
          <SiJavascript fill="#F7DF1E" />
          <SiReact fill="#61DAFB" />
          <SiBootstrap fill="#7952B3" />
          <SiNodedotjs fill="#339933" />
          <SiExpress fill="#E6E7E4" />
          <SiMarkdown fill="#E6E7E4" />
          <SiVisualstudiocode fill="#007ACC" />
          <SiGit fill="#F05032" />
          <SiGithub fill="#E6E7E4" />
          <SiFigma fill="#F24E1E" /> */
}
