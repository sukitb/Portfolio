import React from "react";
import { useState } from "react";
import { Anchor } from "../Anchor/Anchor";
import "./Accordion.sass";


export function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  function toggleAccordion() {
    setIsActive(!isActive);
  }

  return (
    <div className="Accordion">
      <div className="flex">
        <img src={props.img} />
        <div className="block">
          <div className="tab">
            <h3>{props.title}</h3>
            <h3>
              <Anchor text={`@` + props.place} />
            </h3>
          </div>
          <div className="block">
            <div className="sub-tab">
              <h3>{props.time}</h3>
              <a onClick={toggleAccordion}>{!isActive ? `▽` : `△`}</a>
            </div>

            {isActive && (
              <ul>
                {props.content.map((l) => (
                  <li>{l}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
