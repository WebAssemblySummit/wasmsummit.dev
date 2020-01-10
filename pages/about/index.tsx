import { FC, ReactNode } from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { faq } from "../../data/about";
import { navbarBlue } from "../../components/colors";

const title = "About";

const AboutPage: FC = () => (
  <>
    <Background />
    <NavBar
      title={title}
      currentPage="About"
      backgroundColor={navbarBlue}
      bottom
    />
    <Faq id="faq">
      <Headline>Frequently Asked Questions</Headline>
      {faq.map(({ question, answer }) => (
        <FaqItem key={question}>
          <Question>{question}</Question>
          <Answer>{answer}</Answer>
        </FaqItem>
      ))}
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

const Faq = styled.div`
  padding: 7vh 5%;
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: #fff;
  border-radius: 5px;
  columns: auto;
  column-width: 500px;
  column-gap: 50px;
  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Headline = styled.h1`
  font-size: 2.5em;
`;

const FaqItem = styled.div`
  break-inside: avoid;
`;

const Question = styled.h2`
  font-size: 1.5em;
  margin: 0 25px 0 0;
  padding: 15px 15px;
  font-weight: 700;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
`;

const Answer = styled.div`
  font-size: 1.2em;
  margin: 25px 25px 0 0;
  padding: 0 15px 50px 25px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
`;
