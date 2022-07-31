import React from "react";
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

export function Skills() {
  const Skills = styled.div``;

  const List = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 50px auto;

    & svg {
      width: 50px;
      height: 50px;
      margin: 0 8px;
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

  return (
    <Skills>
      <List>
        <SiHtml5 fill="#E34F26" />
        <SiCss3 fill="#1572B6" />
        <SiJavascript fill="#F7DF1E" />
        <SiReact fill="#61DAFB" />
        <SiBootstrap fill="#7952B3" />
        <SiNodedotjs fill="#339933" />
        <SiExpress fill="#E6E7E4" />
        <SiMarkdown fill="#E6E7E4" />
      </List>
      <List>
        <SiVisualstudiocode fill="#007ACC" />
        <SiGit fill="#F05032" />
        <SiGithub fill="#E6E7E4" />
        <SiFigma fill="#F24E1E" />
      </List>
    </Skills>
  );
}
