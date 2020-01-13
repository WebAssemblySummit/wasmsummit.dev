import { FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { NavBar, navbarBlue, SpeakerCard } from "../../components";
import { speakers } from "../../data/speakers";

const title = "Speaker";

const SpeakerPage: FC = () => {
  const { query } = useRouter();
  const id = Array.isArray(query.id) ? query.id[0] : query.id;
  const speaker = speakers[id];
  return (
    <>
      <Background />
      <NavBar title={title} backgroundColor={navbarBlue} bottom />
      <Headline>{title}</Headline>
      {speaker && <SpeakerCard key={speaker.name} profile={speaker} />}
    </>
  );
};

export default SpeakerPage;

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
