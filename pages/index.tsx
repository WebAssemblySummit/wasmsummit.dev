import { FC } from "react";
import styled from "styled-components";
import { NavBar, navbarBlue } from "../components";

const LandingPage: FC = () => (
  <View>
    <NavBar backgroundColor={navbarBlue} bottom />
    <Container>
      <Hero>
        <Logo src="/summit-logo.svg" alt="WebAssembly Summit Logo" />
        <Title>
          <Headline>
            WebAssembly
            <br />
            Summit
          </Headline>
          <Subheadline>
            <Highlight>February 10</Highlight>, 2020 <br />
            <Highlight>Google</Highlight>, 1625 Plymouth St
            <br />
            <Highlight>Mountain View</Highlight> CA
          </Subheadline>
        </Title>
      </Hero>
      <Oneliner>
        A <OnelinerHighlight>one day, single track</OnelinerHighlight>,
        conference about <OnelinerHighlight>all things</OnelinerHighlight>{" "}
        WebAssembly.
      </Oneliner>
    </Container>
  </View>
);

export default LandingPage;

const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 65px);
  background: linear-gradient(
    180deg,
    hsla(239, 60%, 48%, 0) 20%,
    hsla(239, 60%, 48%, 1) 70%
  );
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: flex-end;
  align-content: center;
  margin-left: 5vw;
  margin-right: 5vw;

  @media (orientation: portrait) {
    grid-template-columns: 1fr;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  flex-grow: 1;
  flex-basis: 1280px;
  flex-shrink: 1;
  width: 1280px;

  @media (orientation: portrait) {
    max-width: 100vw;
    max-height: 45vh;
  }
`;

const Title = styled.div`
  margin: 0 0 3.5vh 0;

  @media (orientation: portrait) {
    padding: 0 12.5vw;
  }
`;

const Headline = styled.h1`
  font-size: 3.5rem;
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  margin: 20px 0px;
  padding: 0px;
  letter-spacing: 5px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  line-height: 1.25;

  @media (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 700px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const Highlight = styled.span`
  font-size: 1.6rem;
  color: white;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Oneliner = styled.div`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: left;
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 1vw;
  line-height: 1.6;
  max-width: 768px;

  @media (min-width: 1800px) {
    font-size: 1.5rem;
  }

  @media (orientation: portrait) {
    font-size: 1.2rem;
    padding-left: 12.5vw;
    padding-right: 12.5vw;
    /* padding: 0 12.5vw; */
  }

  @media (max-width: 450px) {
    font-size: 1rem;
  }

  @media (max-width: 1024px) and (orientation: portrait) {
    margin-top: 0;
  }
`;

const OnelinerHighlight = styled.span`
  font-size: 1.4rem;
  color: white;

  @media (min-width: 1800px) {
    font-size: 1.6rem;
  }

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;
