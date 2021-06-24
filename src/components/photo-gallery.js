import React from "react";

import Layout from "../components/layout";
// import Gallery from "@browniebroke/gatsby-image-gallery";
import styled from "styled-components";
import Lightbox from "../components/LightBox";
import PhotoHero from "../components/PhotoHero";
import DoubleColumn, { TextWrapper } from "../components/DoubleColumn";
import Video from "../components/Video";
import IconSection from "../components/IconSection";

const projectDetails = (project) => {
  return (
    <TextWrapper>
      <h3>{project.title}</h3>
      <p>{project.description.description}</p>
    </TextWrapper>
  );
};

const PhotoGallery = ({ pageContext }) => {
  const project = pageContext.project;

  return (
    <Layout>
      <PhotoHero heading={project.title} headerBg={project.hero.headerBg.file.url} />
      <IconSection />
      <DoubleColumn
        background="#efeff2"
        columnOneContent={projectDetails(project)}
        columnTwoContent={
          <Video videoSrcURL={project.video.videoUrl} videoTitle={project.video.title} />
        }
      />
      <Lightbox images={project.images} />
    </Layout>
  );
};

export default PhotoGallery;
