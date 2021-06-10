import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

const Services = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allServicesJson {
        edges {
          node {
            alt
            button
            name
            img {
              childrenImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  `)

  function getServices(data) {
    const servicesArray = []
    data.allServicesJson.edges.forEach((item, index) => {
      servicesArray.push(
        <ProductCard key={index}>
          <ProductImg
            image={item.node.img.childrenImageSharp[0].gatsbyImageData}
            alt={item.node.alt}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              to="#"
              primary="true"
              round="true"
              css={`position: absolute; top: 420px; font-size=14px;`}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return servicesArray
  }

  return (
    <div>
      <ProductsContainer id="services">
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsWrapper>{getServices(data)}</ProductsWrapper>
      </ProductsContainer>
    </div>
  )
}

export default Services

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1600px) / 2);
  color: white;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
