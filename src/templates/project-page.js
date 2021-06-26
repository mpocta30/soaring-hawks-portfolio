import React from "react";

import Layout from "../components/layout";
import Lightbox from "../components/LightBox";
import PhotoHero from "../components/PhotoHero";
import DoubleColumn, { TextWrapper } from "../components/DoubleColumn";
import Video from "../components/Video";
import IconSection from "../components/IconSection";
import Seo from "../components/seo";

const projectDetails = (project) => {
  return (
    <TextWrapper>
      <h2>{project.title}</h2>
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
      <Seo seo={seo}></Seo>
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
