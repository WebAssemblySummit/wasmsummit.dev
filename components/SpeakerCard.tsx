import { FC, ReactNode } from "react";
import styled from "styled-components";
import { wasmPurple } from "./colors";

export const SpeakerSummary = styled.div`
  padding: 20px 25px;
  background: hsl(239, 50%, 25%);
  height: 160px;
  line-height: 1.8;
  font-size: 0.75em;

  p {
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
    margin-bottom: 0px;
    font-weight: bold;
    font-size: 1.5em;
    padding: 0;
  }

  @media (max-width: 1280px) {
    padding: 15px 25px;
    height: 140px;
    line-height: 1.6;
  }
  color: rgba(255, 255, 255, 0.8);
`;

export const SpeakerName = styled.div`
  font-size: 1.5em;
  color: white;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 5px 15px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  /* border-bottom: 7px solid rgba(255, 255, 255, 1); */
  /* background-color: rgba(255, 255, 0, 0.9); */
  /* background-color: hsl(237, 60%, 48%); */
  background-color: ${wasmPurple};
`;

const SpeakerCard = styled.div`
  font-size: 1.1em;
  margin: 2.5% 1%;
  color: black;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  width: 390px;

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
    width: 290px;
  }

  @media screen and (max-width: 663px) {
    width: 390px;
  }

  @media screen and (max-width: 450px) {
    width: 290px;
  }
`;

export const Title = styled.h2`
  font-size: 1.8em;
  line-height: 1.2;
  font-weight: bold;
  margin: 0px 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.8);

  @media screen and (max-width: 1024px) {
    font-size: 1.5em;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.5em;
  line-height: 1.2;
  font-weight: bold;
  margin: 5px 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.9);

  @media screen and (max-width: 1024px) {
    font-size: 1.5em;
  }
`;

export default SpeakerCard;
