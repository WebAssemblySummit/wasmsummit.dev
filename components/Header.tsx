import { FC, ComponentType } from "react";
import styled from "styled-components";
import Head from "next/head";
import NavBar from "./NavBar";

type Props = {
  title?: string;
  transparent?: boolean;
};

const websiteName = "WebAssembly Summit";

const Header: FC<Props> = ({ title, transparent }) => (
  <Box>
    <Head>
      <title>
        {websiteName}
        {title ? `: ${title}` : ""}
      </title>
    </Head>
    <NavBar />
    {title ? (
      <Headline>
        <Spacer></Spacer>
        <Heading>{title}</Heading>
      </Headline>
    ) : (
      undefined
    )}
  </Box>
);

export default Header;

const Spacer = styled.div`
  width: 80px;

  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

const Box = styled.div`
  background-color: #1b1d6e;
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #1b1d6e;
  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
`;

const Heading = styled.h1`
  flex: 1;
  font-size: 2.2em;
  font-weight: 700;
  margin: 0;
  padding: 0 15px 15px 0px;
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;
