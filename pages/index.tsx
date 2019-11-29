import Head from "next/head";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";

export default () => {
  return (
    <Container>
      <Head>
        <title>WebAssembly</title>
      </Head>

      <Hero>
        <Logo src="/static/wasmsummit2.svg" alt="Web assembly summit logo" />
        <div>
          <Headline>
            WebAssembly
            <br />
            Summit
          </Headline>
          <Subheadline>
            February 10, 2020 <br />
            Google, Plymouth St 1625
            <br />
            Mountain View CA
          </Subheadline>
        </div>
      </Hero>

      <Content>
        WebAssembly Summit is a one day, single-track, conference for all things
        WebAssembly.
      </Content>

      <CTA>
        <Button primary href="#">
          Apply as speaker
        </Button>
        <Button primary={false} href="#">
          Apply for tickets
        </Button>
      </CTA>

      <Footer>
        <a href="#">Contact</a>|<a href="#">Code of conduct</a>
      </Footer>
    </Container>
  );
};

const Logo = styled.img`
  max-width: 100%;
  margin-left: auto;
  margin-right: 20px;
  width: 1280px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 0px 50px;
  margin: 0 auto;
  display: flex;
  height: 98vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;
  align-content: center;
  margin-top: 5vh;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Headline = styled.h1`
  font-size: 3.75rem;
  text-shadow: 1px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 20px 0px;
  padding: 0px;
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 400;
  line-height: 1.3;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subheadline = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  padding: 0;
`;

const Content = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  max-width: 900px;
  margin: 50px auto;
`;

const CTA = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.a`
  font-size: 1.67rem;
  padding: 20px 25px;
  background: ${(props: { primary: boolean }) =>
    props.primary ? "#2D16A4" : "#fff"};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 20px 20px;
  color: ${(props: { primary: boolean }) =>
    props.primary ? "#fff" : "#2D16A4"};
  transition: all 0.1s ease;
  display: inline-block;
  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.07);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 5px 5px;
  }
`;

const Footer = styled.footer`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 40px 0px;
  font-size: 1.1rem;
  a {
    color: rgba(255, 255, 255, 0.7);
    margin: 0px 10px;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
