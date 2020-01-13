import { FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  NavBar,
  navbarBlue,
  SpeakerCard,
  SpeakerName,
  SpeakerSummary,
  Title
} from "../../components";
import { speakers, Speaker } from "../../data/speakers";
import { talks, Talk } from "../../data/talks";
import { FaTwitter, FaGithub } from "react-icons/fa";
/* import { FaGithub, FaTwitter } from "react-icons/fa"; */

const title = "Speaker";

const SpeakerPage: FC = () => {
  const { query } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const speaker: Speaker = speakers[id] || {};
  const talk: Talk = speaker.talkId ? talks[speaker.talkId] : {};
  const time = talk.time || {};

  return (
    <>
      <Background />
      <NavBar title={title} backgroundColor={navbarBlue} bottom />
      <Content>
        {/* <PageTitle>{title}</PageTitle> */}
        <Columns>
          <SpeakerBox>
            {speaker.name && (
              <SpeakerCard>
                <img
                  src={speaker.picture}
                  alt={`picture of ${speaker.name}`}
                ></img>
                <SpeakerName bold>{speaker.name}</SpeakerName>
                <SpeakerSummary>
                  {talk && (
                    <>
                      <Title>{talk.title}</Title>
                      <TimeLinks>
                        <Time>
                          {time.start} - {time.end}{" "}
                        </Time>
                        {/*  <Icon>
                          <FaGithub size={32}></FaGithub>
                        </Icon>
                        <Icon>
                          <FaTwitter size={32}></FaTwitter>
                        </Icon> */}
                      </TimeLinks>
                      <p></p>
                    </>
                  )}
                </SpeakerSummary>
              </SpeakerCard>
            )}
          </SpeakerBox>
          <Section>
            <Headline>{talk.title}</Headline>
            {speaker.name && <SectionHeading>{speaker.name}</SectionHeading>}
            <SectionSubHeading>
              {talk.time &&
                talk.time.start &&
                talk.time.end &&
                `${talk.time && talk.time.start} - ${talk.time &&
                  talk.time.end}`}
            </SectionSubHeading>

            <SectionContent>{talk.abstract}</SectionContent>
          </Section>
        </Columns>
      </Content>
    </>
  );
};

export default SpeakerPage;

export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  color: rgba(255, 255, 255, 0.8);
`;

const Time = styled.div``;

const Background = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(237, 0%, 48%, 0.15);
  padding: 25px;
  z-index: -1;
`;

const SpeakerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5vh;
  margin-bottom: 2vh;
  margin-right: 0;
  padding-top: 15px;

  @media screen and (max-width: 450px) {
    /* display: none; */
    margin-top: 3vh;
  }
`;

const TimeLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 1.6em;
  margin-top: 3vh;
  margin-bottom: -3vh;
  padding: 0;
  margin-left: 30px;
  color: rgb(150, 150, 200);

  @media screen and (max-width: 663px) {
    font-size: 1.5em;
    /* text-align: center; */
  }
`;

export const Headline = styled.h2`
  font-size: 2.5em;
  margin-top: 3vh;
  margin-bottom: 0vh;
  padding: 0 15px;

  @media screen and (max-width: 1024px) {
    font-size: 2em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3vh 3vw;
  color: white;
  min-height: calc(100vh - 65px);
  align-items: center;
  justify-content: center;

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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
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
  margin: 0vh 3vw;
  max-width: 1024px;
`;

const SectionHeading = styled.h2`
  font-size: 2em;
  margin: 0 25px 0 0;
  padding: 15px;
  font-weight: 700;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);

  @media screen and (max-width: 1024px) {
    font-size: 1.5em;
  }
`;

const SectionSubHeading = styled.p`
  font-size: 1.3em;
  margin: 0 25px 0 0;
  padding: 15px;
  font-weight: 700;
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
`;

const SectionContent = styled.div`
  font-size: 1.2em;
  margin: 0 0px 0 0;
  padding: 0 15px 50px 25px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
`;
