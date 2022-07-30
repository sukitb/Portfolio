import React, { useState } from "react";

import "./Navbar.sass";
import "../../global.sass";
import { Anchor } from "../Anchor/Anchor";

export function Navbar() {

  const [isNavbarExpanded, setIsNavbarExpanded] = useState('false')

  const navbarExpanded = () => {
    setIsNavbarExpanded(!isNavbarExpanded)
  }

  let navbarToggle = isNavbarExpanded ? "navbar-menu expanded" : "navbar-menu"
  

  return (
    <div className="navbar">
      <div>
        <span>{`<Sukit />`}</span>
      </div>
      <button className="hamburger" onClick={navbarExpanded}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className={navbarToggle}>
        <ul>
          <li>
            <Anchor
              text="PROFILE"
              href="https://www.w3schools.com/tags/tag_a.asp"
            />
          </li>
          <li>
            <Anchor
              text="EXPERIENCES"
              href="https://reactjs.org/docs/thinking-in-react.html"
            />
          </li>
          <li>
            <Anchor
              text="PROJECTS"
              href="https://reactjs.org/docs/thinking-in-react.html"
            />
          </li>
          <li>
            <Anchor
              text="SKILLS"
              href="https://reactjs.org/docs/thinking-in-react.html"
            />
          </li>
          <li>
            <Anchor
              text="CONTACT"
              href="https://reactjs.org/docs/thinking-in-react.html"
            />
          </li>
          <li>
            <Anchor
              text="RESUME"
              href="https://reactjs.org/docs/thinking-in-react.html"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
