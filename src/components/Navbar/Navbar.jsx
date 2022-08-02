import React, { useState } from "react";
import styled from "styled-components";
import "../../global.sass";
import { Anchor } from "../Anchor/Anchor";
import SLogo  from "../../assets/Icon/S.svg";

export function Navbar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState("false");

  const navbarExpanded = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  let navbarToggle = isNavbarExpanded ? "navbar-menu expanded" : "navbar-menu";

  const navbarList = [
    {
      text: `PROFILE`,
      href: `#profile`,
    },
    {
      text: `EXPERIENCES`,
      href: `#experiences`,
    },
    {
      text: `PROJECTS`,
      href: `#projects`,
    },
    {
      text: `CONTACT`,
      href: `#contact`,
    },
    {
      text: `RESUME`,
      href: `#resume`,
    },
  ];

  const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const NavMenu = styled.div`
    display: flex;

    ul {
      display: flex;
      list-style: none;
    }

    li {
      margin-left: 20px;
    }

  `;

  const Logo = styled.div`
    img {
      width: 35px;
      height: 35px;
    }
  `;


  return (
    
    <Navbar>
      
        <Logo>
          <img src={SLogo}></img>
        </Logo>
      

      <NavMenu>
      <ul>
        {navbarList.map(({text, href}) => (
          
            <li><Anchor text={text} href={href} /></li>
          
        )
        )}
        </ul>
      </NavMenu>
            
    </Navbar>
    
  );
}
