import React from "react";
import { Anchor } from "../Anchor/Anchor";
import { Skills } from "../Skills/Skills";
import "./Profile.sass";
import TypeAnimation from "react-type-animation";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { IoDocumentTextSharp } from "react-icons/io5";
import profile from "../../assets/Profile/profile.jpg";

export function Profile() {
  const ProfilePic = styled.img`
    width: 400px;
    margin: 20px;
  `;
  
  const Title = styled.div`
    display: flex;
    align-items: flex-end;

    div {
      padding-left: 20px;
    }

    @media screen and (max-width: 768px) {
      
      display: block;
      
      
    }
  `

  return (
    <div className="Profile">
      <div className="header">
        <h2 class="red">ABOUT</h2>
      </div>

      <motion.div
        viewport={{ once: true, amount: 0.1 }}
        initial={{ x: -300, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "Tween",
          duration: 1,
        }}
      >
        <Title>
        <ProfilePic src={profile}></ProfilePic>
        <div>
        <h1>Sukit Bunsiri</h1>
        <h2>I'm Web Developer</h2>
        </div>
        </Title>
      </motion.div>

      <motion.div
        viewport={{ once: true, amount: 0.1 }}
        initial={{ x: 300, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "Tween",
          duration: 1,
          delay: 0.5,
        }}
      >
        <div className="content">
          <p>
            Before I started coding I was a teaching fellow for 2 years at{" "}
            <Anchor
              text="Teach For Thailand"
              href="https://www.teachforthailand.org/"
            />{" "}
            where I realized my passion is solving problems for people. <br />
            <br />
            Then I started my coding journey at{" "}
            <Anchor text="freeCodeCamp" href="https://www.freecodecamp.org/" />.
            My passion drives me to join the Junior Software Developer
            (Fullstack) Bootcamp by{" "}
            <Anchor
              text="Generation Thailand"
              href="https://thailand.generation.org/"
            />
            , where I learned a lot of technical skills and how to work with
            others by using agile. <br />
            <br />
            Nowadays I’m still fully passionate about developing my technical
            skills and soft skills every day. I wish I can use creativity to
            deliver something that is valuable for your organization in the
            future.
          </p>
        </div>
      </motion.div>

      <div>
      <motion.div
        viewport={{ once: false, amount: 0.1 }}
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "Tween",
          duration: 1,
          delay: 0,
        }}
      >
        
        <Button
          icon={<IoDocumentTextSharp />}
          blank={true}
          text="RESUME"
          href="https://drive.google.com/file/d/1z9ccyoYtml5n97zwnYj5fV7tPhgWeJJd/view?usp=sharing"
        />
        
      </motion.div>
      </div>
      <Skills />
    </div>
  );
}
