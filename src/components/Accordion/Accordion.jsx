import React from "react";
import { useState } from "react";
import { Anchor } from "../Anchor/Anchor";
import styled from "styled-components";


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
      margin: 0px 0px 50px 0px;
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
       margin: 20px 0px;
       & img {
        margin: 0px;
    }
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
    &.mobile{
      display: none;
    }

    & li {
      line-height: 1.5em;
    }

    @media screen and (max-width: 768px) {
      & .mobile{
        display: block;
      }

      & .desktop{
        display: none;
      }
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
      background-color: transparent;
      width: 120px;
      height: 48px;
      color: white;
      display: none;
      border: 1px solid #B9BBB3;
      font-size: 16px;
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
          <Anchor text={`@` + props.place} blank={true} href={props.href} />
        </h3>
        
      </Header>

      <Toggle>
      <h3>{props.time}</h3>
          <ToggleButton className="mobile" onClick={toggleAccordion}>{!isActive ? `MORE` : `LESS`}</ToggleButton>
        </Toggle>

      <Description>
      
        <div className="mobile">
        { isActive && (
          <ul>
            {props.content.map((l) => (
              <li>{l}</li>
            ))}
          </ul>
        )}
        </div>
        
        <div className="desktop">
        <ul>
        {props.content.map((l) => (
              <li>{l}</li>
            ))}
        </ul>
        </div>
      </Description>

      </Wrapper>

    </JobCard>
  );
}