import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import { Container, Card } from "react-bootstrap";
import BackgroundVideo from "components/BackgroundVideo";
import "./ImageCard.scss";

const ImageCard = ({ className, header, subheader, extraInfo }) => {
  return (
    <section className="hero-section bg-dark text-white text-center">
      <BackgroundVideo />
      <div className="bg-overlay no-padding">
        <Container>
          <div className="intro-text">
            <div className="intro-lead-in">{subheader}</div>
            <div className="intro-heading text-uppercase">{header}</div>
            {extraInfo}
          </div>
        </Container>
      </div>
    </section>
    // <Card className={clsx("image-card bg-dark text-white text-center", className)}>
    //   {/* <Image className="image" fileName={imageFileName} alt={imageAlt || header || subheader} /> */}
    //   <BackgroundVideo />
    //   <Card.ImgOverlay className="no-padding">
    //     <Container>
    //       <div className="intro-text">
    //         <div className="intro-lead-in">{subheader}</div>
    //         <div className="intro-heading text-uppercase">{header}</div>
    //         {extraInfo}
    //       </div>
    //     </Container>
    //   </Card.ImgOverlay>
    // </Card>
  );
};

ImageCard.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  extraInfo: PropTypes.any,
};

ImageCard.defaultProps = {
  className: null,
  header: "",
  subheader: "",
  extraInfo: null,
};

export default ImageCard;
