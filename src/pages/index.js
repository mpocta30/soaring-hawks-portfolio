import * as React from "react";
import Email from "../components/Email";
import Hero from "../components/Hero";

import Layout from "../components/layout";
import Services from "../components/Services";
import Seo from "../components/seo";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

const IndexPage = () => (
  <Layout>
    <Seo title="" />
    <Hero />
    <Services heading="Services" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
);

export default IndexPage;
