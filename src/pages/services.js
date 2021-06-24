import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PhotoHero from "../components/PhotoHero";
import Services from "../components/Services";
import ServicesBg from "../assets/images/real-estate.jpg";

const services = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <PhotoHero heading="Services" headerBg={ServicesBg} />
      <Services heading="" />
    </Layout>
  );
};

export default services;
