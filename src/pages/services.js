import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import Services from "../components/Services";

const services = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <PhotoHero heading="Services" />
      <Services heading="" />
    </Layout>
  );
};

export default services;
