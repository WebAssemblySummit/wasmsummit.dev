import { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { speakers } from "../../data/speakers";
import { wasmPurple } from "../../components/colors";

const title = "Speakers";

export type SpeakerProfile = {
  name: string;
  picture: string;
  bio?: string;
};

const SpeakersPage: FC = () => (
  <>
    <Sandbox />
    <NavBar
      title={title}
      currentPage="Speakers"
      backgroundColor="#1b1d6e"
      bottom
    />
    <ContentContainer id="faq">
      {speakers.map((speaker, index) => (
        <Speaker key={speaker.name + index} profile={speaker} />
      ))}
    </ContentContainer>
  </>
);

export default SpeakersPage;

const Speaker: FC<{ profile: SpeakerProfile }> = ({ profile }) => (
  <SectionBody>
    <img src={profile.picture}></img>
    <SectionHeader bold>{profile.name}</SectionHeader>
    <Bio>{profile.bio}</Bio>
  </SectionBody>
);

const Bio = styled.div`
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

const SectionHeader = styled.div`
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

const SectionBody = styled.div`
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
`;

const Sandbox = styled.div`
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

const ContentContainer = styled.div`
  /* background-color: rgb(30, 30, 30); */
  margin: 0;
  padding: 25px;
  padding-bottom: 50px;
  padding-top: 50px;
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
