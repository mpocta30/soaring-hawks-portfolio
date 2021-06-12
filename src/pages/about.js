import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import DoubleColumn from "../components/DoubleColumn";
import Services from "../components/Services";
import Contact from "../components/Contact";
import TeamImage from "../assets/images/testimonial-1.jpg";
import ContactBg from "../assets/images/email.jpg";

const about = () => {
  return (
    <Layout>
      <Seo title="About" />
      <PhotoHero heading="About" />
      <DoubleColumn
        heading="Lorem Ipsum"
        subheading="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        image={TeamImage}
        alt="The Soaring Hawk Team"
      />
      <Services heading="Services" />
      <Contact
        sectionBg={ContactBg}
        title="Get Access to Exclusive Offers"
        subtitle="Sign up for your newsletter below to get $100 off your first trip!"
      />
    </Layout>
  );
};

export default about;
