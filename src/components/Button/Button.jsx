import React from "react";
import styled from "styled-components";
import { IoDocumentSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { SiResurrectionremixos } from "react-icons/si";

export function Button(props) {
  const Button = styled.a`
    width: 100px;
    display: grid;
    grid-template-columns: 5px auto 5px;
    grid-template-rows: 5px auto 5px;

    @media only screen and (max-width: 768px) {
      width: 50%;
      display: flex;

      button {
        width: 100%;
      }
    }

    button {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
      color: white;
      font-family: "Source Sans Pro";
      font-size: 0.8em;
      font-weight: bold;
      background-color: #0d1117;
      width: 100%;
      height: 100%;
      padding: 10px;

      border: 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      cursor: pointer;
    }

    svg {
      width: 1em;
      padding: 0px 16px 0px 0px;
    }
  `;

  const ShadowButton = styled.div`
    grid-column: 2 / 4;
    grid-row: 2/4;
    width: 100%;

   
    background-color: #ff7b72;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  `;

  return (
    <Button
      href={props.href}
      target={props.blank ? "_blank" : ""}
      onClick={props.onClick}
    >
      <motion.button
        whileHover={{
          scale: 1,
          x: 5,
          y: 5,
          transition: { duration: 0.3 },
        }}
      >
        {props.icon}
        {props.text}
      </motion.button>

      <ShadowButton></ShadowButton>
    </Button>
  );
}
