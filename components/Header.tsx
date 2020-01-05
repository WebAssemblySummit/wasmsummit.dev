import { FC, ComponentType } from "react";
import styled from "styled-components";
import Head from "next/head";
import NavBar from "./NavBar";

type Props = {
  title: string;
};

const websiteName = "WebAssembly Summit";

const Header: FC<Props> = ({ title }) => (
  <>
    <Head>
      <title>
        {websiteName}: {title}
      </title>
    </Head>
    <NavBar />
    <Headline>
      <Spacer></Spacer>
      <Heading>{title}</Heading>
    </Headline>
  </>
);

export default Header;

const Spacer = styled.div`
  width: 100px;

  @media screen and (max-width: 768px) {
    width: 40px;
  }
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
`;
