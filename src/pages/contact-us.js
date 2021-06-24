import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import Contact from "../components/Contact";
import styled from "styled-components";
import ContactBg from "../assets/images/testimonial-1.jpg";

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <PhotoHero heading="Contact Us" headerBg={ContactBg} />
    <Contact
      title="Get in Touch"
      subtitle="Have a project idea? Provide us with a little information."
      pageName="Contact Us"
    />
    {/* <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link> */}
  </Layout>
);

export default ContactPage;

const ContactUsForm = styled(Contact)`
  margin-top: 80px;

  input {
    border: 1px solid #e5e6e9;
  }
`;
