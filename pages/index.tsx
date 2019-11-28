import Head from "next/head";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";

export default () => {
  return (
    <Centered>
      <Head>
        <title>WebAssembly</title>
      </Head>
      <div>
        <header role="banner">
          <Headline>
            <Logo alt="WebAssembly logo" src="/static/webassembly-logo.svg" />
          </Headline>
          <Headline>
            WebAssembly<br></br> Summit
          </Headline>
        </header>
        <GrayDiv role="main">
          <WhiteSpan>February 10</WhiteSpan>, 2020<br></br>
          <WhiteSpan>Google</WhiteSpan>, Plymouth St 1625<br></br>
          <WhiteSpan>Mountain View</WhiteSpan> CA
        </GrayDiv>
        <div role="contentinfo">
          <Spacer>
            <a href="https://bit.ly/wasm-summit-2020">
              <Button>
                <FaBell style={{ margin: "0 20px 0 35px" }} role="img" aria-label="Sign Up Icon"></FaBell>
                <div>Sign up for updates</div>
              </Button>
            </a>
          </Spacer>
          <Divider />
          <ContactUs>
            Contact us: <a href="mailto:wasm-summit-2020@chromium.org">wasm-summit-2020@chromium.org</a>
          </ContactUs>
        </div>
      </div>
    </Centered>
  );
};

const Logo = styled.img`
  max-width: 450px;
  width: 200px;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const WhiteSpan = styled.span`
  font-size: 20px;
  color: white;
`;

const GrayDiv = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  margin: 20px 20px;
  line-height: 1.5;
`;

const Headline = styled.h1`
  font-size: 38px;
  color: white;
  letter-spacing: 7px;
  margin: 20px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  padding: 10px 5px;
  font-weight: bold;
  text-align: center;
  transition: 150ms;

  &:hover {
    border: 1px solid transparent;
    box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.05);
    transform: scale(1.04);
    color: black;
    background-color: rgba(255, 255, 0, 0.75);
  }
`;

const Spacer = styled.div`
  font-size: 20px;
  line-height: 1.5;
  padding: 10px 20px 0 20px;
`;

const Divider = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.8);
  margin-top: 3em;
  margin-bottom: 1em;
`;

const ContactUs = styled.div`
  color: #FFFFFF;
  text-align: center;

  a, a:visited {
    color: rgba(255, 255, 255, 0.7);
  }
`;

