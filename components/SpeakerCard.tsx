import { FC } from "react";
import styled from "styled-components";
import { wasmPurple } from "./colors";

export type SpeakerProfile = {
  name: string;
  picture: string;
  bio?: string;
};

const SpeakerCard: FC<{ profile: SpeakerProfile }> = ({ profile }) => (
  <Card>
    <img src={profile.picture} alt={`picture of ${profile.name}`}></img>
    <SpeakerName bold>{profile.name}</SpeakerName>
    <SpeakerSummary>{profile.bio}</SpeakerSummary>
  </Card>
);

export default SpeakerCard;

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

const Card = styled.div`
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
