import { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { speakers } from "../../data/speakers";
import { wasmPurple, navbarBlue } from "../../components/colors";

const title = "Speakers";

export type SpeakerProfile = {
  name: string;
  picture: string;
  bio?: string;
};

const SpeakersPage: FC = () => (
  <>
    <Background />
    <NavBar title={title} backgroundColor={navbarBlue} bottom />
    <Headline>{title}</Headline>
    <Speakers id="speakers">
      {speakers.map((speaker, index) => (
        <Speaker key={speaker.name + index} profile={speaker} />
      ))}
    </Speakers>
  </>
);

export default SpeakersPage;

export const Headline = styled.h1`
  font-size: 2.5em;
  margin-top: 3vh;
  margin-bottom: 2vh;
  padding: 0 0px;
  margin-left: 4vw;
  @media screen and (max-width: 663px) {
    text-align: center;
    margin-left: 0;
  }
`;

const Speaker: FC<{ profile: SpeakerProfile }> = ({ profile }) => (
  <SpeakerCard>
    <img src={profile.picture} alt={`picture of ${profile.name}`}></img>
    <SpeakerName bold>{profile.name}</SpeakerName>
    <SpeakerSummary>{profile.bio}</SpeakerSummary>
  </SpeakerCard>
);

const SpeakerSummary = styled.div`
  padding: 20px 25px;
  background: hsl(239, 50%, 25%);
  height: 140px;
  line-height: 1.8;

  @media (max-width: 1280px) {
    padding: 15px 25px;
    height: 130px;
    line-height: 1.6;
    font-size: 0.9em;
  }
  color: rgba(255, 255, 255, 0.8);
`;

const SpeakerName = styled.div`
  font-size: 1.5em;
  margin: 0;
  padding: 5px 15px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  /* border-bottom: 7px solid rgba(255, 255, 255, 1); */
  /* background-color: rgba(255, 255, 0, 0.9); */
  /* background-color: hsl(237, 60%, 48%); */
  background-color: ${wasmPurple};
  color: white;
`;

const SpeakerCard = styled.div`
  font-size: 1.1em;
  margin: 2.5% 1%;
  color: black;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  width: 400px;

  img {
    width: 100%;
    margin-bottom: -5px;
  }
  transition: 300ms;
  /* border: 5px solid rgba(255, 255, 255, 0.1); */

  &:hover {
    transform: scale(1.02);
    /* border: 5px solid rgba(255, 255, 255, 0.25); */
  }

  @media (max-width: 1280px) {
    width: 300px;
  }

  @media screen and (max-width: 663px) {
    width: 400px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
  }
`;

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

const Speakers = styled.div`
  margin: 0;
  padding: 25px;
  padding-top: 0px;
  padding-bottom: 100px;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1vw;
  grid-row-gap: 70px;
  justify-items: center;
  align-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2vw;
  }
`;
