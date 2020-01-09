import { FC, ComponentType } from "react";
import styled from "styled-components";
import Head from "next/head";

type Props = {
  title?: string;
  transparent?: boolean;
};

const websiteName = "WebAssembly Summit";

const Header: FC<Props> = ({ title, transparent }) => (
  <>
    <Head>
      <title>
        {websiteName}
        {title ? `: ${title}` : ""}
      </title>
    </Head>
    {/* {title ? (
      <Headline>
        <Heading>{title}</Heading>
      </Headline>
    ) : (
      undefined
    )} */}
  </>
);

export default Header;

const Spacer = styled.div`
  width: 75px;

  @media screen and (max-width: 768px) {
    width: 30px;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #1b1d6e;

  border-bottom: 4px solid hsl(256, 91%, 10%);
  box-shadow: inset 0px 5px 20px hsla(256, 91%, 10%, 0.8);
`;

const Heading = styled.h1`
  flex: 1;
  font-size: 2em;
  font-weight: 700;
  margin: 0;
  padding: 3vh 10px 3vh 6%;
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.5);
  color: rgb(180, 180, 255);

  @media screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;
