import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./Navbar.style";
import LogoImg from "../../assets/Icon/S.svg";

import styled from "styled-components";
import { Button } from "../Button/Button";

import { motion } from "framer-motion";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const navbarList = [
    {
      text: `ABOUT`,
      href: `#profile`,
    },
    {
      text: `PROJECTS`,
      href: `#projects`,
    },
    {
      text: `EXPERIENCE`,
      href: `#experiences`,
    },
    {
      text: `CONTACT`,
      href: `#contact`,
    },
  ];

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((curr) => !curr);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
          </OpenLinksButton>
          <NavbarLinkContainer>
            {navbarList.map(({ text, href }) => (
              <Button key={text} text={text} href={href} />
            ))}
          </NavbarLinkContainer>
        </LeftContainer>
      </NavbarInnerContainer>
      <motion.div layout onClick={() => setExtendNavbar(!extendNavbar)}>
        {extendNavbar && (
          <NavbarExtendedContainer>
            {navbarList.map(({ text, href }) => (
              <Button
                key={text}
                text={text}
                href={href}
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              />
            ))}
          </NavbarExtendedContainer>
        )}
      </motion.div>
    </NavbarContainer>
  );
}

export default Navbar;
