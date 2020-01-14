import { FC, ReactNode } from "react";
import styled from "styled-components";
import { NavBar, navbarBlue } from "../components";

const title = "Schedule";

const SchedulePage: FC = () => (
  <>
  <Background />
  <NavBar title={title} backgroundColor={navbarBlue} bottom />
  <Container>
    <Headline>{title}</Headline>
  </Container>
  </>
);

export default SchedulePage;

export const Background = styled.div`
  background-color: hsla(237, 0%, 48%, 0.15);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const Headline = styled.h1`
  font-size: 3em;
  margin-top: 3vh;
  margin-bottom: 0vh;
  padding: 10px;
`;

export const Container = styled.div`
  padding: 3vh 9vw;
  color: white;
`;


