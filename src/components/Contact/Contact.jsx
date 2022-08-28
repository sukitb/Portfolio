import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { SiMedium } from "react-icons/si";

import { IoDocumentTextSharp } from "react-icons/io5";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";


export function Contact() {
  const iconList = [
    {
      text: `Resume`,
      icon: <IoDocumentTextSharp />,
      link: `https://drive.google.com/file/d/1wJ0iYHpdUYTV_0vMx3FLyRk8ZCWeoq6T/view?usp=sharing`,
    },
    {
      text: `Email`,
      icon: <AiOutlineMail />,
      link: `mailto: sukit.bunsiri@gmail.com`,
    },
    {
      text: `GitHub`,
      icon: <VscGithub />,
      link: `https://github.com/sukitb`,
    },
    {
      text: `LinkedIn`,
      icon: <AiFillLinkedin />,
      link: `https://www.linkedin.com/in/sukit-bunsiri`,
    },
    {
      text: `Medium`,
      icon: <SiMedium />,
      link: `https://sukitbunsiri.medium.com/`,
    },
  ];

  const Contact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      padding: 0px;
      margin-top: 100px;
      height: auto;
    }
  `;

  const Menu = styled.div`
    div {
      display: flex;
      justify-content: center;
      
    }
    a {
      margin: 30px 30px;
    }

    @media screen and (max-width: 768px) {
    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      
    }
      a {
        font-size: 24px;
        min-width: 250px;
        
        height: 100px;
        margin: 10px 10px;

        div {
          display: none;
        }
      }
    }
  `;

  const ButtonContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0.5 },
    visible: {
      y: 0,
      opacity: 1,

      transition: {
        type: "tween",
        
      },
    },
  };

  return (
    <Contact>
      <h2 className="red">CONTACT</h2>
      <h3>Reach me on</h3>
      <Menu>
        
        <motion.div
          variants={ButtonContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {iconList.map(({ icon, link, text }) => (
            <motion.div className="ButtonAnimation" variants={item}>
              <Button
                ket={text}
                id={text}
                icon={icon}
                text={text}
                href={link}
                blank={true}
              />
            </motion.div>
          ))}
        </motion.div>
        
        </Menu>
    </Contact>
  );
}
