import React from "react";

import Layout from "../components/layout";
import styled from "styled-components";
import Lightbox from "../components/LightBox";
import PhotoHero from "../components/PhotoHero";
import DoubleColumn, { TextWrapper } from "../components/DoubleColumn";
import Video from "../components/Video";
import IconSection from "../components/IconSection";
import Seo from "../components/seo";

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
  const seo = project.sections[0];
  const projectInfo = project.sections[1];

  return (
    <Layout>
      <Seo title={seo.title}></Seo>
      <PhotoHero heading={projectInfo.title} headerBg={projectInfo.hero.headerBg.file.url} />
      <IconSection />
      <DoubleColumn
        background="#efeff2"
        columnOneContent={projectDetails(projectInfo)}
        columnTwoContent={
          <Video videoSrcURL={projectInfo.video.videoUrl} videoTitle={projectInfo.video.title} />
        }
      />
      <Lightbox images={projectInfo.photoGallery.photos} />
    </Layout>
  );
};

export default PhotoGallery;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 16vw;
  grid-gap: 0.5em;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1600px) / 2);
  margin: 0 2rem;
  color: white;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;
