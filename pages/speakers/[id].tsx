import { FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  NavBar,
  navbarBlue,
  SpeakerCard,
  SpeakerName,
  Title,
  Company
} from "../../components";
import { speakers, Speaker } from "../../data/speakers";
import { talks, Talk } from "../../data/talks";
import { FaTwitter, FaGithub, FaLink } from "react-icons/fa";

const title = "Speaker";

const SpeakerPage: FC = () => {
  const { query } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const speaker: Speaker = speakers[id] || {};
  const talk: Talk = speaker.talkId ? talks[speaker.talkId] : {};
  const time = talk.time || {};

  let LinkIcon = FaLink;
  if (speaker.website) {
    if (speaker.website.includes("twitter")) {
      LinkIcon = FaTwitter;
    } else if (speaker.website.includes("github")) {
      LinkIcon = FaGithub;
    }
  }

  return (
    <>
      <Background />
      <NavBar title={title} backgroundColor={navbarBlue} bottom />
      <Content>
        {/* <PageTitle>{title}</PageTitle> */}
        <Columns>
          <SpeakerBox>
            {speaker.name && (
              <a href={speaker.website} target="_blank">
                <SpeakerCard>
                  <img
                    src={speaker.picture}
                    alt={`picture of ${speaker.name}`}
                  ></img>
                  <SpeakerName>
                    <strong>{speaker.name}</strong>{" "}
                    {speaker.company && <Company>{speaker.company}</Company>}
                  </SpeakerName>
                  <SpeakerSummary>
                    {speaker.website && (
                      <>
                        <Links>
                          <Icon>
                            <LinkIcon size={32}></LinkIcon>
                          </Icon>
                        </Links>
                      </>
                    )}
                  </SpeakerSummary>
                </SpeakerCard>
              </a>
            )}
          </SpeakerBox>
          <Section>
            {speaker.name && <SectionHeading>{talk.title}</SectionHeading>}
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

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.div`
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
  margin-top: 0vh;
  margin-bottom: 2vh;
  margin-right: 0;
  padding-top: 0;

  @media screen and (max-width: 450px) {
    /* display: none; */
    margin-top: 3vh;
  }
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
  font-size: 2em;
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
`;

const Columns = styled.div`
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const Section = styled.div`
  break-inside: avoid;
  flex: 1;
  margin: 1vh 3vw 0vh 3vw;
  max-width: 1024px;
`;

const SectionHeading = styled.h2`
  font-size: 1.8em;
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

export const SpeakerSummary = styled.div`
  padding: 15px 30px 30px 30px;
  background: hsl(239, 50%, 25%);
  height: 40px;
  line-height: 1.8;
  font-size: 0.78em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 1.4em;
    padding: 0;
  }

  @media (max-width: 1280px) {
    padding: 15px 25px;
    height: 50px;
    line-height: 1.6;
  }
  color: rgba(255, 255, 255, 0.8);
`;
