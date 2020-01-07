import { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const title = "About the event";

type SpeakerProfile = {
  name: string;
  picture: string;
  bio?: string;
};

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
  }
];

const SpeakersPage: FC = () => (
  <>
    <NavBar title={title} currentPage="Schedule" />
    <AboutContainer>
      <Sandbox />
      <ContentContainer id="faq">
        <Row>
          {speakers.map(speaker => (
            <Speaker profile={speaker} />
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
  </SectionBody>
);

const A = styled.a`
  margin: 0;
`;

const AboutContainer = styled.div`
  /* background-color: rgb(30, 30, 30); */
`;

const Bio = styled.div`
  padding: 15px 20px;
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
`;

const SectionHeader = styled.div`
  font-size: 1.5em;
  margin: 0 0px 0 0;
  padding: 5px 15px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  text-shadow: 3px 3px 5px hsla(237, 0%, 0%, 0.5);
`;

const SectionBody = styled.div`
  font-size: 1.1em;
  margin: 2.5% 0%;

  color: black;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};

  /* background-color: white; */
  overflow: hidden;
  width: 100px;
  height: 350px;
  img {
    width: 100%;
    border-radius: 50%;
  }
  transition: 180ms;

  &:hover {
    transform: scale(1.03);
  }
`;

const Sandbox = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgb(60, 60, 60);
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
