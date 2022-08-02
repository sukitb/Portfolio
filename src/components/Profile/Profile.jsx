import React from "react";
import { Anchor } from "../Anchor/Anchor";
import { Skills } from "../Skills/Skills";
import "./Profile.sass";
import TypeAnimation from "react-type-animation";

export function Profile() {
  return (
    <div className="Profile">
      <div className="header">
        <h2 class="highlight">PROFILE</h2>
      </div>
      
        <h1>Sukit Bunsiri</h1>
        <div style={{ width: '100%' }}>
        <TypeAnimation
          cursor={true}
          sequence={[
            `I'm a Lawyer`,
            300,
            `I'm a Teacher`,
            300,
            `I'm a WEB DEVELOPER`,
          ]}
          wrapper="h2"
        />
        </div>
      
      <p>
        Before I started coding I was a teaching fellow for 2 years at{" "}
        <Anchor
          text="Teach For Thailand"
          href="https://www.teachforthailand.org/"
        />{" "}
        where I realized my passion is solving problems for people. <br />
        <br />
        Then I started my coding journey at{" "}
        <Anchor text="freeCodeCamp" href="https://www.freecodecamp.org/" />. My
        passion drives me to join the Junior Software Developer (Fullstack)
        Bootcamp by{" "}
        <Anchor
          text="Generation Thailand"
          href="https://thailand.generation.org/"
        />
        , where I learned a lot of technical skills and how to work with others
        by using agile. <br />
        <br />
        Nowadays I’m still fully passionate about developing my technical skills
        and soft skills every day. I wish I can use creativity to deliver
        something that is valuable for your organization in the future.
      </p>

      <Skills />
    </div>
  );
}
