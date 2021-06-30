import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDesc>
        <h1>Soaring Hawk</h1>
        <p>Aerial Photography and Video</p>
      </FooterDesc>
      <FooterLinkItems>
        <FooterLinkTitle>Contact Us</FooterLinkTitle>
        <FooterLink to="/contact-us">Contact</FooterLink>
        <FooterEmailPhone href="tel:18044208561">+1 (804) 420-8561</FooterEmailPhone>
        <FooterEmailPhone href="mailto: soaringhawkdrones@gmail.com">
          soaringhawkdrones@gmail.com
        </FooterEmailPhone>
      </FooterLinkItems>
      <FooterLinkItems>
        <FooterLinkTitle>Social Media</FooterLinkTitle>
        <SocialWrapper>
          <FooterLink to="https://www.facebook.com/">
            <FaFacebook />
          </FooterLink>
          <FooterLink to="https://www.instagram.com/">
            <FaInstagram />
          </FooterLink>
          <FooterLink to="https://www.youtube.com/channel/UCZiryQRFLSbo9qes3KlE_Tg" target="_blank">
            <FaYoutube />
          </FooterLink>
          <FooterLink to="https://www.twitter.com/">
            <FaTwitter />
          </FooterLink>
        </SocialWrapper>
      </FooterLinkItems>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: #000;
  background: #ececef;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterDesc = styled.div`
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 1rem;
    color: #263b46;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 767px) {
    padding: 1rem;
    align-items: center;
  }
`;

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font: 14px;
  color: #3d3d4e;

  &:hover {
    color: #3b5b6d;
    transition: 0.3s ease-out;
  }
`;

const FooterEmailPhone = styled.a`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font: 14px;
  color: #3d3d4e;

  &:hover {
    color: #3b5b6d;
    transition: 0.3s ease-out;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${FooterLink} {
    font-size: 1.25rem;
    padding-right: 10px;
  }
`;
