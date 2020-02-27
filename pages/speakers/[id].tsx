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
        <Section>
          <Headline>
            {speaker.name}{" "}
            {speaker.website && (
              <a href={speaker.website} target="_blank">
                <Icon>
                  <LinkIcon size={25}></LinkIcon>
                </Icon>
              </a>
            )}
          </Headline>
          <SpeakerNameHeadline>{talk.title}</SpeakerNameHeadline>
          {talk.time && talk.time.start && talk.time.end && (
            <SectionHeading>
              {" "}
              {`${talk.time && talk.time.start} - ${talk.time &&
                talk.time.end}`}
            </SectionHeading>
          )}
          <YoutubeEmbed embedId={talk.embedId} />
          <SectionContent>{talk.abstract}</SectionContent>
        </Section>
      </Content>
    </>
  );
};

const YoutubeEmbed: FC<{ embedId: string }> = ({ embedId }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "97%",
        paddingTop: "53.25%",
        margin: "50px 10px"
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          border: "1px solid black",
          boxShadow: "5px 10px 15px rgba(0,0,0,0.5)",
          borderRadius: 10
        }}
        width={"100%"}
        height={"100%"}
        src={`https://www.youtube.com/embed/${embedId}?list=PL6ed-L7Ni0yQ1pCKkw1g3QeN2BQxXvCPK`}
        frameBorder={0}
        allowFullScreen
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default SpeakerPage;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
`;

export const Icon = styled.span`
  padding: 5px 10px;
  color: rgba(255, 255, 255, 0.7);
  transition: 150ms;

  &:hover {
    color: white;
  }
`;

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
  margin: 0;

  margin-top: 3vh;
  margin-bottom: 0vh;
  padding: 0 15px;

  @media screen and (max-width: 1024px) {
    font-size: 1.9em;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1vh 3vw;
  color: white;
  min-height: calc(100vh - 65px);
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 70px;

  @media screen and (orientation: portrait) {
    flex-direction: row;
  }
`;

const Section = styled.div`
  margin-top: 3vh;
  break-inside: avoid;
  flex: 2;
  max-width: 1024px;
  min-width: 350px;
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

const SectionContent = styled.div`
  font-size: 1.3em;
  margin: 5vh 15px 3vh 15px;
  /*   padding: 0 15px 50px 25px;
 */
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
`;

const SpeakerNameHeadline = styled.h2`
  font-size: 1.5em;
  padding-bottom: 15px;
  padding-left: 15px;
  font-weight: 700;
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);

  @media screen and (max-width: 1024px) {
    font-size: 1.3em;
  }
`;

export const SpeakerSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px 30px 30px;
  background: hsl(239, 50%, 25%);
  height: 130px;
  line-height: 1.8;
  font-size: 1em;

  p {
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 1.8em;
    padding: 0;
  }

  @media (max-width: 1280px) {
    padding: 15px 25px;
    height: 130px;
    line-height: 1.6;
  }
  color: rgba(255, 255, 255, 0.8);
`;
