import React from "react";

import Layout from "../components/layout";
import PhotoHero from "../components/PhotoHero";
import IconSection from "../components/IconSection";
import InformationSection from "../components/InformationSection";
import Seo from "../components/seo";
import Products from "../components/Products";

function createNode(projects) {
  const newProjects = [];
  projects.forEach((item, index) => {
    newProjects.push({ node: item });
  });
  return newProjects;
}

const ServicePage = ({ pageContext }) => {
  const service = pageContext.service;
  const seo = service.sections[0];
  const infoSection = service.sections[1].columns[0];
  const serviceInfo = service.sections[2];
  const projects = serviceInfo.projects;

  return (
    <Layout>
      <Seo seo={seo} />
      <PhotoHero heading={serviceInfo.title} headerBg={serviceInfo.hero.headerBg.file.url} />
      <InformationSection heading={infoSection.heading} text={infoSection.text.text} />
      <IconSection background="#efeff2" />
      <Products background="white" products={createNode(projects)} name="projects" />
    </Layout>
  );
};

export default ServicePage;
