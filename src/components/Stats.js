import React from "react";
import styled from "styled-components";
import { statsData } from "../data/StatsData";

const Stats = ({ animation }) => {
  return (
    <StatsContainer>
      <Heading
        data-sal={animation}
        data-sal-duration="2000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        Why Choose Us?
      </Heading>
      <Wrapper>
        {statsData.map((item, index) => {
          return (
            <StatsBox
              key={index}
              data-sal={animation}
              data-sal-duration="2000"
              data-sal-delay={(300 + 200 * index).toString()}
              data-sal-easing="ease"
            >
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          );
        })}
      </Wrapper>
    </StatsContainer>
  );
};

export default Stats;

const StatsContainer = styled.div`
  width: 100%;
  background: white;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem calc((100vw - 1500px) / 2);

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
const Heading = styled.h1`
  font-size: clamp(1.5rem, 6vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`;

const Description = styled.p``;
