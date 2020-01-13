import { FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { NavBar, navbarBlue, SpeakerCard } from "../../components";
import { speakers, Speaker } from "../../data/speakers";
import { talks, Talk } from "../../data/talks";

const title = "Speaker";

const SpeakerPage: FC = () => {
  const { query } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const speaker: Speaker = speakers[id] || {};
  const talk: Talk = speaker.talkId ? talks[speaker.talkId] : {};

  return (
    <>
      <Background />
      <NavBar title={title} backgroundColor={navbarBlue} bottom />
      <Content>
        <Headline>{speaker.name}</Headline>
        <Columns>
          <Section>
            <SectionHeading>{talk.title}</SectionHeading>
            <SectionContent>{talk.abstract}</SectionContent>
          </Section>
          {speaker.name && (
            <SpeakerCard key={name} name={speaker.name} {...speaker} />
          )}
        </Columns>
      </Content>
    </>
  );
};

export default SpeakerPage;

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsla(237, 0%, 48%, 0.2);
  padding: 25px;
  z-index: -1;
`;

export const Headline = styled.h1`
  font-size: 3em;
  margin-top: 3vh;
  margin-bottom: 0vh;
  padding: 15px;
`;

const Content = styled.div`
  padding: 1vh 3vw;
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

const Columns = styled.div`
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: #fff;
  border-radius: 5px;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Section = styled.div`
  break-inside: avoid;
  flex: 1;
  margin: 3vh 3vw;
`;

const SectionHeading = styled.h2`
  font-size: 1.5em;
  margin: 0 25px 0 0;
  padding: 15px;
  font-weight: 700;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
`;

const SectionContent = styled.div`
  font-size: 1.2em;
  margin: 25px 25px 0 0;
  padding: 0 15px 50px 25px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
`;
