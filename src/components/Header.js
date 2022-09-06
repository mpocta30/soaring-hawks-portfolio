import * as React from "react";
import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { menuData } from "../data/MenuData";
import { PhoneButton } from "./Button";
import NavImage from "../assets/images/logo.png";
import {Link} from "gatsby";
import {PopupButton} from "react-calendly";

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
    if (typeof window === "undefined" || !window.document) {
      console.log(`bailing out of the useeffect. Going to continue to render??`)
      return
    }
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
            <SubNav key={index}>
              {Array.isArray(item.children) ? (
                <div>
                  <SubnavBtn to={item.link}>
                    {item.title} <FiChevronDown />
                  </SubnavBtn>
                  <SubnavContent>
                    {item.children.map((serviceItem, serviceIndex) => (
                      <NavLink key={serviceIndex} to={serviceItem.node.slug}>
                        {serviceItem.node.title}
                      </NavLink>
                    ))}
                  </SubnavContent>
                </div>
              ) : (
                <NavLink to={item.link}>{item.title}</NavLink>
              )}
            </SubNav>
          ))}
          <SideButtonWrapper>
            <SmallScheduleButton
              url="https://calendly.com/d/dzj-8fk-dv7"
              /*
              * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
              * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
              */
              primary="true"
              rootElement={document.getElementById("___gatsby")}
              text="Click here to schedule!"
            />
            {/* <SmallPhoneButton primary="true" href="tel:18044208561">
              +1 (804) 420-8561
            </SmallPhoneButton> */}
          </SideButtonWrapper>
          <SideSocialWrapper>
            <a href="https://www.facebook.com/soaringhawkaerial/" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/soaringhawkaerial/" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCZiryQRFLSbo9qes3KlE_Tg" target="_blank">
              <FaYoutube />
            </a>
          </SideSocialWrapper>
        </NavMenu>
      </NavContent>
      <NavBtn>
        <PopupButton
          url="https://calendly.com/d/dzj-8fk-dv7"
          primary="true"
          /*
          * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
          * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
          */
          rootElement={document.getElementById("___gatsby")}
          text="Click here to schedule!"
        />
        {/* <PhoneButton primary="true" href="tel:18044208561">
          +1 (804) 420-8561
        </PhoneButton> */}
      </NavBtn>
      <ToTopButon isscrolling={isScrolling ? 1 : 0} onClick={scrollToTop}>
        <FaArrowUp />
      </ToTopButon>
    </Nav>
  );
};

export default Header;

// const ScheduleButton = styled(PopupButton)`
//   background: ${({ primary }) => (primary ? "#263b46" : "#077BF1")};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
//   color: white;
//   font-size: ${({ big }) => (big ? "20px" : "16px")};
//   outline: none;
//   border: none;
//   min-width: 100px;
//   cursor: pointer;
//   text-decoration: none;
//   transition: 0.3s !important;
//   border-radius: ${({ round }) => (round ? "50px" : "none")};

//   &:hover {
//     background: ${({ primary }) => (primary ? "#345060" : "#263b46")};
//     transform: translateY(-2px);
//   }
// `;

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

const SmallScheduleButton = styled(PopupButton)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
  }
`

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
  bottom: 15px;
  right: 20px;
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

const SubnavBtn = styled(NavLink)`
  @media screen and (min-width: 769px) {
    display: block;
    padding: 16px;
  }

  @media screen and (max-width: 768px) {
    > svg {
      display: none;
    }
  }
`;

const SubnavContent = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  transition: all 0.5s ease;
  display: none;
  background-color: #3b5b6d;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-size: 15px;

  ${NavLink} {
    padding: 12px 16px;
    text-decoration: none;
    display: block;

    &:hover {
      background-color: #263b46;
    }
  }
`;

const SubNav = styled.div`
  @media screen and (min-width: 769px) {
    &:hover ${SubnavContent} {
      visibility: visible;
      opacity: 1;
      display: block;
    }
  }
`;

const SideSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 6rem;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: none;
  }

  a {
    font-size: 24px;
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
    }

    @media screen and (max-width: 768px) {
      padding: 8px;
      text-decoration: none;
      font-size: 25px;
      display: block;
      transition: 0.3s;
    }
  }

  a:not(:last-child) {
    padding-right: 16px;
  }
`;
