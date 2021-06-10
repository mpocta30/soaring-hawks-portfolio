import * as React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { menuData } from "../data/MenuData";
import { Button, PhoneButton } from "./Button";
import NavImage from "../assets/images/logo.png";

const Header = () => {
  const [isScrolling, setScrolling] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const changeBackground = () => {
    if (window.scrollY >= window.outerHeight / 8) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  React.useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Nav isScrolling={isScrolling}>
      <NavLink to="/">
        <NavImg src={NavImage} alt="logo" />
      </NavLink>
      <Bars onClick={toggleExpanded} />
      <NavContent expanded={expanded}>
        <NavCloseBtn onClick={toggleExpanded} />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink key={index} to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
      </NavContent>
      <NavBtn>
        <PhoneButton primary="true" href="tel:123-456-7890">
          +1 (123) 456-7890
        </PhoneButton>
      </NavBtn>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: ${({ isScrolling }) => (isScrolling ? "#3b5b6d" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 199;
  position: fixed;
  top: 0;
  width: 100%;
`;

const NavContent = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
    position: fixed;
    display: block;
    text-align: center;
    z-index: 1;
    top: 0;
    left: auto;
    right: ${({ expanded }) => (expanded ? "0" : "-100%")};
    background-color: #3b5b6d;
    overflow-x: hidden;
    transition: 0.5s;
  }
`;

const NavCloseBtn = styled(FaTimes)`
  display: none;
  color: white;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 20px;
    right: 45px;
  }
`;

const NavLink = styled(AnchorLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  height: 100%;

  &:hover,
  &:focus {
    color: #f1f1f1;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    display: block;
    transition: 0.3s;
  }
`;

const NavImg = styled.img`
  height: clamp(2.5rem, 4vw, 3.5rem);
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media screen and (max-width: 768px) {
    height: 40px;
  } */
`;

const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
