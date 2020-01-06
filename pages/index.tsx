import { FC } from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

const LandingPage: FC = () => (
  <View>
    <NavBar />
    <Container>
      <Hero>
        <Logo src="summit-logo.svg" alt="WebAssembly Summit Logo" />
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
  min-height: 100vh;
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
  grid-template-columns: 1.3fr 1fr;
  align-items: flex-end;
  align-content: center;
  margin-top: 8vh;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;

    margin-top: 0vh;
    margin-bottom: 0vh;
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  margin-left: auto;
  flex-grow: 1;
  flex-basis: 900px;
  width: 900px;
  flex-shrink: 1;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.div`
  padding-right: 10%;
  margin: 0 0 3vh 0;

  @media (max-width: 768px) {
    padding: 0 10%;
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

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 450px) {
    font-size: 2.5rem;
  }
`;

const Subheadline = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
`;

const Highlight = styled.span`
  font-size: 1.6rem;
  color: white;
`;

const Oneliner = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  text-align: left;
  margin: 3vh auto;
  padding: 0 10%;
  line-height: 1.6;
  max-width: 768px;
`;

const OnelinerHighlight = styled.span`
  font-size: 1.4rem;
  color: white;
`;

const CallToAction = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.a`
  font-size: 1.6rem;
  padding: 15px 20px;
  background: ${(props: { primary?: boolean }) =>
    props.primary ? "#2D16A4" : "#fff"};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 3vh 20px;
  color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "#2D16A4"};
  transition: all 0.1s ease;
  display: inline-block;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.07);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 10px 5px;
  }
`;

const NoBreak = styled.span`
  white-space: nowrap;
`;

const Footer = styled.footer`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 2vh 0;
  font-size: 1.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a,
  a:visited {
    color: rgba(255, 255, 255, 0.7);
    margin: 0px 10px;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
