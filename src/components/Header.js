import * as React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import { menuData } from "../data/MenuData";
import { PhoneButton } from "./Button";
import NavImage from "../assets/images/logo.png";
import { Link } from "gatsby";

const Header = () => {
  const [isScrolling, setScrolling] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => {
    if (window.outerWidth <= 768) {
      setExpanded(!expanded);
    }
  };

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

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav isscrolling={isScrolling ? 1 : 0}>
      <NavLink to="/">
        <NavImg src={NavImage} alt="logo" />
      </NavLink>
      <Bars onClick={toggleExpanded} />
      <NavContent expanded={expanded}>
        <NavCloseBtn onClick={toggleExpanded} />
        <NavMenu>
          {menuData().map((item, index) => (
            <div>
              {Array.isArray(item.children) ? (
                <HoverNavLink key={index} to={item.link}>
                  {item.title}
                  <NavSubMenu>
                    {item.children.map((serviceItem, serviceIndex) => (
                      <NavLink key={serviceIndex} to={serviceItem.node.slug}>
                        {serviceItem.node.title}
                      </NavLink>
                    ))}
                  </NavSubMenu>
                  <DownArrow />
                </HoverNavLink>
              ) : (
                <NavLink key={index} to={item.link}>
                  {item.title}
                </NavLink>
              )}
            </div>
          ))}
          <SideButtonWrapper>
            <SmallPhoneButton primary="true" href="tel:123-456-7890">
              +1 (123) 456-7890
            </SmallPhoneButton>
          </SideButtonWrapper>
        </NavMenu>
      </NavContent>
      <NavBtn>
        <PhoneButton primary="true" href="tel:123-456-7890">
          +1 (123) 456-7890
        </PhoneButton>
      </NavBtn>
      <ToTopButon isscrolling={isScrolling ? 1 : 0} onClick={scrollToTop}>
        <FaArrowUp />
      </ToTopButon>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: ${(props) => (props.isscrolling ? "#3b5b6d" : "transparent")};
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
    right: ${(props) => (props.expanded ? "0" : "-100%")};
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

const SideButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 4rem;
`;

const SmallPhoneButton = styled(PhoneButton)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
  }
`;

const NavLink = styled(Link)`
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
    font-size: 25px;
    display: block;
    transition: 0.3s;
  }
`;

const HoverNavLink = styled(NavLink)`
  display: block;
`;

const NavSubMenu = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  display: none;
  background-color: #3b5b6d;
  text-align: center;
  align-items: center;
  font-size: 15px;

  @media screen and (min-width: 769px) {
    ${HoverNavLink}:hover &,
  &:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }

  ${NavLink} {
    text-align: center;
    padding: 0.5em 0.5em;
    text-decoration: none;

    &:hover {
      background-color: #263b46;
    }
  }
`;

const NavImg = styled.img`
  height: clamp(2.5rem, 4vw, 3.5rem);
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ToTopButon = styled.a`
  display: ${(props) => (props.isscrolling ? "flex" : "none")};
  background-color: #263b46;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border-radius: 50%;
  font-size: clamp(1.5rem, 4vw, 2rem);
  line-height: clamp(2.5rem, 6vw, 3rem);
  width: clamp(2.5rem, 6vw, 3rem);
  height: clamp(2.5rem, 6vw, 3rem);
  justify-content: center;
  align-items: center;

  &:hover {
    background: #345060;
    transform: translateY(-2px);
  }
`;

const DownArrow = styled.i`
  margin-left: 5px;
  margin-top: 3px;
  position: absolute;
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
