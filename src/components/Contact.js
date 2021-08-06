import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Contact = ({ sectionBg, title, subtitle, pageName }) => {
  const data = useStaticQuery(graphql`
    query contactFormQuery {
      allContentfulService {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  function getServiceOptions() {
    const serviceOptions = [];
    data.allContentfulService.edges.forEach((item, index) => {
      serviceOptions.push(
        <FormOption key={index} value={item.node.title.replace(/\s+/g, "-").toLowerCase()}>
          {item.node.title}
        </FormOption>,
      );
    });
    return serviceOptions;
  }

  return (
    <ContactContainer sectionbg={sectionBg}>
      <ContactContent>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
          <FormWrap>
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="page-name" value={pageName} />
            <FormName>
              <NameInput>
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  id="firstname"
                  name="firstname"
                  required
                />
              </NameInput>
              <NameInput>
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  id="lastname"
                  name="lastname"
                  required
                />
              </NameInput>
            </FormName>
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email" id="email" name="email" required />
            <label for="subject">Subject</label>
            <select id="subject" name="subject" required>
              <FormOption disabled value="">
                -- Select a Service --
              </FormOption>
              {getServiceOptions()}
            </select>
            <label for="message">Message</label>
            <textarea id="message" placeholder="Enter Message" name="message" required />
            <FormButton as="button" primary="true" type="submit">
              Submit
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
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.01) 100%
    ),
    url(${props.sectionbg}) no-repeat center;`
      : "none"};
  background-size: cover;
  height: 650px;
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
    margin-bottom: 3rem;
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
    font-size: 14px;
    padding: 1rem 1.5rem;
    outline: none;
    width: 100%;
    border: ${(props) => (props.sectionbg ? "none" : "1px solid lightgray")};
    margin-bottom: 1rem;
  }

  input,
  select {
    height: 48px;
  }

  select {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    background-color: white;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-family: inherit;
    transition: all 150ms ease;
    text-indent: 10px;
  }

  textarea {
    height: 100px;
  }

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 0.5rem;
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

const NameInput = styled.div``;

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

const FormOption = styled.option`
  color: #223254;
`;
