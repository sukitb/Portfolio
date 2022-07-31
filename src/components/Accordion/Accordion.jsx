import React from "react";
import { useState } from "react";
import { Anchor } from "../Anchor/Anchor";
import styled from "styled-components";
import "./Accordion.sass";

export function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  const JobCard = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0px;
    @media screen and (max-width: 768px) {
      display: block;
    }
  `;

  const Logo = styled.div`
    & img {
    width: 180px;
    margin-right: 20px;
    }
    @media screen and (max-width: 768px) {
       display: flex;
       justify-content: center;
       margin: 40px;
    }

  `;

  const Wrapper = styled.div`
    display: block;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  const Header = styled.div`
    display: flex;
    @media screen and (max-width: 768px) {
       display: flex;
       flex-direction: column;
       align-items: center;
    }
  `;

  const Description = styled.div`
    & li {
      line-height: 1.5em;
    }
  `;

  const Toggle = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
       display: flex;
       flex-direction: column;
       align-items: center;
    }
  `;

  const ToggleButton = styled.button`
    &.desktop {
      display: block;
      background-color: transparent;
      border: none;
      color: #FF7B72;
      font-size: 1em;
      ;
    }

    &.mobile {
      margin: 10px 0px;
      background-color: #FF7B72;
      width: 120px;
      height: 60px;
      color: white;
      display: none;
      border-radius: 5px;
      font-family: "Helvetica";
      font-size: 0.8em;
      font-weight: bold;
    }

    @media screen and (max-width: 768px) {
      &.desktop {
        display: none;
      } 
      &.mobile {
        display: block;
       }
    }

  `

  return (
    <JobCard>
      
      <Logo>
        <img src={props.img} />
      </Logo>

      <Wrapper>

      <Header>
        <h3>{props.title}</h3>
        <h3>
          <Anchor text={`@` + props.place} />
        </h3>
      </Header>

      <Description>
        <Toggle>
          <h3>{props.time}</h3>
          <ToggleButton className="desktop" onClick={toggleAccordion}>{!isActive ? `▽` : `△`}</ToggleButton>
          <ToggleButton className="mobile" onClick={toggleAccordion}>{!isActive ? `more` : `less`}</ToggleButton>
        </Toggle>
        {isActive && (
          <ul>
            {props.content.map((l) => (
              <li>{l}</li>
            ))}
          </ul>
        )}
      </Description>

      </Wrapper>

    </JobCard>
  );
}
