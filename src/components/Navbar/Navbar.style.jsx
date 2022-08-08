import styled from "styled-components";

export const NavbarContainer = styled.nav`
  top: 0px;
  width: 100%;
  position: sticky;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  
  display: flex;
  flex-direction: column;
  
  z-index: 4;

  margin-bottom: 50px;

  @media (min-width: 700px) {
    height: 10px;
  }
`;

export const LeftContainer = styled.div`
  flex: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const RightContainer = styled.div`
  flex: 0%;
  display: flex;

  padding-right: 50px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #0d1117;
  
  a {
    margin: 30px 20px;
  }
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLink = styled.a`
  font-size: 1em;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled.a`
  font-size: x-large;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 25px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0d1117;
  a {
    margin-bottom: 50px;
    
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
