import { FC, ReactNode } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { faq } from "./data";
import { wasmPurple, wasmDarkPurple } from "../../components/colors";

const title = "About the event";

const AboutPage: FC = () => (
  <>
    <BackgroundLayer></BackgroundLayer>
    <NavBar title={title} currentPage="About" backgroundColor="#1b1d6e" />
    <Faq />
  </>
);

export default AboutPage;

export const BackgroundLayer = styled.div`
  background-color: white; /* hsla(237, 60%, 48%, 0.6); */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const Faq: FC = () => (
  <FaqBox id="faq">
    <ColumnLayout>
      {faq.map(({ question, answer }) => (
        <FaqItem question={question}>{answer}</FaqItem>
      ))}
    </ColumnLayout>
  </FaqBox>
);

const FaqBox = styled.div`
  padding: 7vh 5%;
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: black;
  border-radius: 5px;

  a {
    color: ${wasmDarkPurple};
    text-decoration: underline;
    &:visited {
      color: ${wasmDarkPurple};
      text-decoration: underline;
    }
  }
`;

const ColumnLayout = styled.div`
  columns: auto;
  column-width: 500px;
  column-gap: 50px;
`;

const FaqItem: FC<{ question: string; children: ReactNode }> = ({
  question: heading,
  children
}) => (
  <div style={{ breakInside: "avoid" }}>
    <Question bold>{heading}</Question>
    <Answer>{children}</Answer>
  </div>
);

const Question = styled.div`
  font-size: 1.5em;
  margin: 0 25px 0 0;
  padding: 15px 15px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  border-bottom: 8px solid rgb(200, 200, 200);
  /*   text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3); */
`;

const Answer = styled.div`
  font-size: 1.3em;
  margin: 30px 25px 0 0;
  padding: 0 15px 50px 25px;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.7);
  /* text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25); */
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};

  @media screen and (max-width: 749px) {
    fonts-size: 1em;
  }
`;
