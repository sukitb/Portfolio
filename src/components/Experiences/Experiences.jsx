import React from "react";
import "./Experiences.sass";
import TFT from "../../assets/Jobs/Teach for Thailand.svg";
import Glico from "../../assets/Jobs/Glico_logo.svg";
import TU from "../../assets/Jobs/logo-new-white.png";
import Gen from "../../assets/Jobs/Generation.svg";
import { Accordion } from "../Accordion/Accordion";

export function Experiences() {
  const jobData = [
    {
      img: TFT,
      title: `Teaching Fellow`,
      place: `Teach For Thailand`,
      time: `2019 - 2021`,
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
      content: [
        `Chairperson of the Student Discipline Committee @Student Council of Thammasat University (2015 - 2016)`,
        `Executive Editor @ D-Ka Magazine (Thammasat Law School magazine) (2015 – 2017)`,
      ],
    },
  ];

  return (
    <div className="Experiences">
      <h2 className="highlight">EXPERIENCES</h2>
      <hr />
      <div className="jobData">
        <div>
          <h2>My previous responsibilities</h2>
          {jobData.map(({ img, title, place, time, content }) => (
            <Accordion
              img={img}
              place={place}
              title={title}
              time={time}
              content={content}
            />
          ))}
        </div>
      </div>
      <div className="educationData">
        <h2>I learned from</h2>
        {educationData.map(({ img, place, title, time, content }) => (
          <Accordion
            img={img}
            title={title}
            place={place}
            time={time}
            content={content}
          />
        ))}
      </div>
    </div>
  );
}
