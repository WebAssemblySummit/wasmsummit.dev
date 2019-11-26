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
        <Headline>
          <Logo alt="WebAssembly logo" src="/static/webassembly-logo.svg" />
        </Headline>
        <Headline>
          WebAssembly<br></br> Summit
        </Headline>
        <GrayDiv>
          <WhiteSpan>February 10</WhiteSpan>, 2020<br></br>
          <WhiteSpan>Google</WhiteSpan>, Plymouth St 1625<br></br>
          <WhiteSpan>Mountain View</WhiteSpan> CA
        </GrayDiv>
        <Spacer>
          <a href="https://bit.ly/wasm-summit-2020">
            <Button>
              <FaBell style={{ margin: "0 20px 0 35px" }}></FaBell>
              <div>Sign up for updates</div>
            </Button>
          </a>
        </Spacer>
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
  color: rgba(255, 255, 255, 0.5);
  margin: 30px 20px;
  line-height: 1.5;
`;

const Headline = styled.div`
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
  padding: 25px 20px 0 20px;
`;
