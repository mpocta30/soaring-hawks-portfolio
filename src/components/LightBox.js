import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  };

  componentDidMount = () => {
    window.addEventListener("keyup", this.handleKeyUp, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener("keyup", this.handleKeyUp, false);
  };

  handleClick = (e, index) => {
    e.preventDefault();
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index });
  };

  closeModal = () => {
    this.setState({ showLightbox: false });
  };

  goBack = () => {
    if (this.state.selectedImage > 0) {
      this.setState({ selectedImage: this.state.selectedImage - 1 });
    } else {
      this.setState({ selectedImage: this.props.images.length - 1 });
    }
  };

  goForward = () => {
    if (this.state.selectedImage < this.props.images.length - 1) {
      this.setState({ selectedImage: this.state.selectedImage + 1 });
    } else {
      this.setState({ selectedImage: 0 });
    }
  };

  handleKeyUp = (e) => {
    e.preventDefault();
    const { keyCode } = e;
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        this.goBack;
      }
      if (keyCode === 39) {
        // Right Arrow Key
        this.goForward;
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false });
      }
    }
  };

  render() {
    const { images } = this.props;
    const { showLightbox, selectedImage } = this.state;

    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={img.gatsbyImageData}>
              <a href={img.gatsbyImageData} alt={img.title} onClick={(e) => this.handleClick(e, i)}>
                <StyledImg image={getImage(img)} alt={img.title} />
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal visible={showLightbox} onKeyUp={(e) => this.handleKeyDown(e)}>
          <CloseButton onClick={this.closeModal} />
          <LightboxContent>
            <StyledImg
              image={getImage(images[selectedImage])}
              alt={images[selectedImage].title}
              objectFit="contain"
            />
            <NavLeft onClick={this.goBack} disabled={selectedImage === 0} />
            <NavRight onClick={this.goForward} disabled={selectedImage === images.length - 1} />
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    );
  }
}

const StyledImg = styled(GatsbyImage)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; // or whatever
  & > img {
    object-position: 0% 0% !important; // or whatever
    object-fit: contain;
  }
`;

const GalleryImg = styled(GatsbyImage)`
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    filter: blur(4px);
    transition: all ease 0.5s;
    cursor: pointer;
  }

  &:nth-child(6n + 3) {
    grid-column: span 1;
    grid-row: span 2;
  }

  &:nth-child(6n + 2),
  &:nth-child(6n + 5),
  &:nth-child(6n + 6) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 16vw;
  grid-gap: 0.5em;
  padding: 5rem calc((100vw - 1600px) / 2);
  margin: 0 2rem;
  color: white;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2 1fr);
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    filter: blur(4px);
    transition: all ease 0.5s;
    cursor: pointer;
  }

  &:nth-child(6n + 3) {
    grid-column: span 1;
    grid-row: span 2;
  }

  &:nth-child(6n + 2),
  &:nth-child(6n + 5),
  &:nth-child(6n + 6) {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

const CloseButton = styled(FaTimes)`
  color: white;
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: bold;

  &:hover {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }
`;

const NavRight = styled(FaAngleRight)`
  color: #cccccc;
  position: absolute;
  right: 0;
  top: 50%;
  width: auto;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
  transition: 0.6s ease;
  border-radius: 3px 0 0 3px;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    cursor: pointer;
  }
`;

const NavLeft = styled(FaAngleLeft)`
  color: #cccccc;
  position: absolute;
  left: 0;
  top: 50%;
  width: auto;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: bold;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    text-decoration: none;
    cursor: pointer;
  }
`;

const LightboxModal = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  z-index: 200;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const LightboxContent = styled.div`
  position: relative;
  display: block;
  background-color: #000;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
  height: 85vh;
`;

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Lightbox;
