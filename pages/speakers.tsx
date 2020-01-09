import { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const title = "Speakers";

type SpeakerProfile = {
  name: string;
  picture: string;
  bio?: string;
};

const wasmPurple = "hsl(257,60%,50%)";
const wasmMidPurple = "hsl(240,60%,50%)";
const wasmDarkPurple = "hsl(256,91%,35%)";

const speakers: SpeakerProfile[] = [
  {
    name: "Ashley Williams",
    picture: "https://avatars3.githubusercontent.com/u/1163554?s=400&v=4",
    bio:
      "a mess like this is easily five to ten years ahead of its time @rustlang core. webassembler @cloudflare. @rustwasm WG 👷‍♀️🦀. prev @npmjs, @nodejs, @mozilla."
  },
  {
    name: "Lin Clark",
    picture:
      "https://pbs.twimg.com/profile_images/497876628651782146/hrCHz_ym_400x400.jpeg",
    bio:
      "Stuffing my head with code and turning it into Code Cartoons. Also, tinkering with WebAssembly, Rust and a little JavaScript at Mozilla"
  },
  {
    name: "Surma",
    picture:
      "https://pbs.twimg.com/profile_images/1203822491032018945/4p9RN-fk_400x400.jpg",
    bio:
      "Web Advocate @Google. Internetrovert 🏳️‍🌈 Craving simplicity, finding it nowhere. https://keybase.io/surma"
  },
  {
    name: "Ashley Williams",
    picture: "https://avatars3.githubusercontent.com/u/1163554?s=400&v=4",
    bio:
      "a mess like this is easily five to ten years ahead of its time @rustlang core. webassembler @cloudflare. @rustwasm WG 👷‍♀️🦀. prev @npmjs, @nodejs, @mozilla."
  },
  {
    name: "Lin Clark",
    picture:
      "https://pbs.twimg.com/profile_images/497876628651782146/hrCHz_ym_400x400.jpeg",
    bio:
      "Stuffing my head with code and turning it into Code Cartoons. Also, tinkering with WebAssembly, Rust and a little JavaScript at Mozilla"
  },
  {
    name: "Surma",
    picture:
      "https://pbs.twimg.com/profile_images/1203822491032018945/4p9RN-fk_400x400.jpg",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem maxime ratione earum dolor. Qui vero maiores quisquam, quia sed ratione esse quos sint corporis culpa, voluptate veritatis, tenetur animi? Id."
  },
  {
    name: "Ashley Williams",
    picture: "https://avatars3.githubusercontent.com/u/1163554?s=400&v=4",
    bio:
      "a mess like this is easily five to ten years ahead of its time @rustlang core. webassembler @cloudflare. @rustwasm WG 👷‍♀️🦀. prev @npmjs, @nodejs, @mozilla."
  },
  {
    name: "Lin Clark",
    picture:
      "https://pbs.twimg.com/profile_images/497876628651782146/hrCHz_ym_400x400.jpeg",
    bio:
      "Stuffing my head with code and turning it into Code Cartoons. Also, tinkering with WebAssembly, Rust and a little JavaScript at Mozilla"
  },
  {
    name: "Ashley Williams",
    picture: "https://avatars3.githubusercontent.com/u/1163554?s=400&v=4",
    bio:
      "a mess like this is easily five to ten years ahead of its time @rustlang core. webassembler @cloudflare. @rustwasm WG 👷‍♀️🦀. prev @npmjs, @nodejs, @mozilla."
  }
];

const SpeakersPage: FC = () => (
  <>
    <NavBar title={title} currentPage="Speakers" backgroundColor="#1b1d6e" />
    <AboutContainer>
      <Sandbox />
      <ContentContainer id="faq">
        <Row>
          {speakers.map((speaker, index) => (
            <Speaker key={speaker.name + index} profile={speaker} />
          ))}
        </Row>
      </ContentContainer>
    </AboutContainer>
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

const A = styled.a`
  margin: 0;
`;

const AboutContainer = styled.div`
  /* background-color: rgb(30, 30, 30); */
  margin: 0;
  padding-top: 20px;
  padding-bottom: 50px;
`;

const Bio = styled.div`
  padding: 20px 25px;
  background: hsl(239, 50%, 25%);
  height: 100%;
  line-height: 1.8;
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
  padding: 25px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
