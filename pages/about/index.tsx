import { FC, ReactNode } from "react";
import styled from "styled-components";
import { navbarBlue } from "../../components/colors";
import NavBar from "../../components/NavBar";
import { faq } from "../../data/about";

const title = "About";

const AboutPage: FC = () => (
  <>
    <Background />
    <NavBar title={title} backgroundColor={navbarBlue} bottom />
    <Faq id="faq">
      <Headline>{title}</Headline>
      <Questions>
        {faq.map(({ question, answer }) => (
          <QuestionAnswerPair key={question}>
            <Question>{question}</Question>
            <Answer>{answer}</Answer>
          </QuestionAnswerPair>
        ))}
      </Questions>
    </Faq>
  </>
);

export default AboutPage;

export const Background = styled.div`
  background-color: hsla(237, 60%, 48%, 0.6);
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
  padding: 15px;
`;

const Faq = styled.div`
  padding: 3vh 9vw;
  color: white;
  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Questions = styled.div`
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: #fff;
  border-radius: 5px;
  columns: auto;
  column-width: 500px;
  column-gap: 10vw;
  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }
`;

const QuestionAnswerPair = styled.div`
  break-inside: avoid;
`;

const Question = styled.h2`
  font-size: 1.5em;
  padding: 15px;
  padding-left: 5px;
  font-weight: 700;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
`;

const Answer = styled.div`
  font-size: 1.2em;
  margin-top: 25px;
  padding: 0 15px 50px 15px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
`;
