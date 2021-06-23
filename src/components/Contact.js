import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Contact = ({ sectionBg, title, subtitle }) => {
  return (
    <ContactContainer sectionbg={sectionBg}>
      <ContactContent>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <FormWrap>
            <FormName>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                placeholder="Enter your first name"
                id="firstname"
                name="firstname"
                required
              />
              <input
                type="text"
                placeholder="Enter your last name"
                id="lastname"
                name="lastname"
                required
              />
            </FormName>
            <input type="email" placeholder="Enter your email" id="email" name="email" required />
            <input id="service" name="service" placeholder="Enter the desired service" required />
            <textarea id="message" placeholder="Enter Message" name="message" required />
            <FormButton as="button" primary="true" type="submit">
              Sign Up
            </FormButton>
          </FormWrap>
        </form>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  background: ${(props) =>
    props.sectionbg
      ? `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url(${props.sectionbg}) no-repeat center;`
      : "none"};
  background-size: cover;
  height: 550px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: ${(props) => (props.sectionbg ? "white" : "#263b46")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
  }

  form {
    width: 100%;
    z-index: 10;
  }
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  width: 100%;

  input,
  textarea,
  select {
    padding: 1rem 1.5rem;
    outline: none;
    width: 100%;
    border: ${(props) => (props.sectionbg ? "none" : "1px solid #e5e6e9")};
    margin-bottom: 1rem;
  }

  input,
  select {
    height: 48px;
  }

  textarea {
    height: 100px;
  }
`;

const FormName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    grid-gap: 0;
  }
`;

const FormButton = styled(Button)`
  height: 48px;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 350px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    min-width: 250px;
  }
`;
