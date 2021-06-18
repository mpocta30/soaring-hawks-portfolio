import * as React from "react";
import Contact from "../components/Contact";
import VideoHero from "../components/VideoHero";

import Layout from "../components/layout";
import Services from "../components/Services";
import Seo from "../components/seo";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import ContactBg from "../assets/images/email.jpg";
import Projects from "../components/Projects";

const IndexPage = () => (
  <Layout>
    <Seo title="Aerial Photography and Video" />
    <VideoHero />
    <Projects heading="Projects" />
    <Testimonials />
    <Stats />
    <Services heading="Services" />
    <Contact
      sectionBg={ContactBg}
      title="Get a Quote"
      subtitle="Inasfa reprehenderit in voluptate velit esse cillum reeut cupidatatfug nulla pariatur."
    />
  </Layout>
);

export default IndexPage;
