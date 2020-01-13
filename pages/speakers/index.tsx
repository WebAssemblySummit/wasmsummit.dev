import { FC } from "react";
import styled from "styled-components";
import { NavBar, navbarBlue, SpeakerCard } from "../../components";
import { speakers } from "../../data/speakers";

const title = "Speakers";

const SpeakersPage: FC = () => (
  <>
    <Background />
    <NavBar title={title} backgroundColor={navbarBlue} bottom />
    <Headline>{title}</Headline>
    <Speakers id="speakers">
      {Object.keys(speakers).map((id, index) => (
        <SpeakerCard key={speakers[id].name + index} {...speakers[id]} />
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
