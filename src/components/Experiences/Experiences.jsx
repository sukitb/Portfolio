import React from "react";
import "./Experiences.sass";
import styled from "styled-components";
import TFT from "../../assets/Jobs/Teach for Thailand.svg";
import Glico from "../../assets/Jobs/Glico_logo.svg";
import TU from "../../assets/Jobs/logo-new-white.png";
import Gen from "../../assets/Jobs/Generation.svg";
import { Accordion } from "../Accordion/Accordion";
import { motion } from "framer-motion";
import { Gallery } from "../Gallery/Gallery";

export function Experiences() {
  const jobData = [
    {
      img: TFT,
      title: `Teaching Fellow`,
      place: `Teach For Thailand`,
      time: `2019 - 2021`,
      href: `https://www.teachforthailand.org/%e0%b9%82%e0%b8%84%e0%b8%a3%e0%b8%87%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%84%e0%b8%a3%e0%b8%b9%e0%b8%9c%e0%b8%b9%e0%b9%89%e0%b8%99%e0%b8%b3/`,
      content: [
        `Planned and designed learning Journey applying data-driven decision-making.`,
        `Teach 100+ of Students. Approximately 54% of low proficiency students have improved their performance.`,
        `Collaborate with stakeholders such as students, teachers, school directors and parents. In order to create a student development collective vision.`,
      ],
    },
    {
      img: Glico,
      title: `General Relation Officer`,
      place: `ThaiGlico`,
      time: `2017`,
      href: `https://www.glico.com/th/en/`,
      content: [
        `Managing relationship between employer and labor union.`,
        `Review factory legal contract.`,
      ],
    },
  ];

  const educationData = [
    {
      img: Gen,
      title: `Fullstack Web Developer Learner`,
      place: `Generation Thailand`,
      time: `May - August 2022`,
      href: `https://thailand.generation.org/programs/tmca-software-developer-3/`,
      content: [
        `Junior Software Developer (Fullstack Web Developer), 12 Weeks (full-time)`,
        `Technical Skills: HTML, CSS, Javascript, React, Node JS, Express, Relational databases, MongoDB
        and git version control.`,
        `Methodology: Object-oriented programming (OOP), Design Thinking, Agile, Scrum process.`,
      ],
    },
    {
      img: TU,
      title: `Bachelor of Laws`,
      place: `Thammasat University`,
      time: `2013 - 2017`,
      href: `https://tu.ac.th/`,
      content: [
        `Chairperson of the Student Discipline Committee @Student Council of Thammasat University (2015 - 2016)`,
        `Executive Editor @ D-Ka Magazine (Thammasat Law School magazine) (2015 – 2017)`,
      ],
    },
  ];

  const Experiences = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { x: -20, opacity: 0.5 },
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        type: "tween",
      },
    },
  };

  return (
    <Experiences>
      <Header>
        <h2 className="red">EXPERIENCE</h2>
      </Header>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="highlight">Responsibility</span>

        {jobData.map(({ img, title, place, time, content, href }) => (
          <motion.div variants={item}>
            <Accordion
              key={title}
              img={img}
              place={place}
              title={title}
              time={time}
              content={content}
              href={href}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <span className="highlight">Education</span>

        {educationData.map(({ img, place, title, time, content, href }) => (
          <motion.div variants={item}>
            <Accordion
              key={title}
              img={img}
              title={title}
              place={place}
              time={time}
              content={content}
              href={href}
            />
          </motion.div>
        ))}
      </motion.div>

      <span className="highlight">Certificates</span>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        <motion.div variants={item}>
          
          <Gallery />
        </motion.div>
      </motion.div>
    </Experiences>
  );
}
