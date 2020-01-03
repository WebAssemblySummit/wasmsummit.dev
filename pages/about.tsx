import { FC, Children, ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const Organizer: FC<{
  image: string;
  name: string;
  link: string;
  handle: string;
}> = ({ image, name, link, handle }) => (
  <SingleOrganizer>
    <img src={image} />
    <h3>{name}</h3>
    <a href={link}>{handle}</a>
  </SingleOrganizer>
);

const Faq: FC<{ heading: string; children: ReactNode }> = ({
  heading,
  children
}) => (
  <div style={{ breakInside: "avoid" }}>
    <Question bold>{heading}</Question>
    <Answer>{children}</Answer>
  </div>
);

export const Logo = styled.img`
  max-width: 100%;
  margin-left: auto;
  flex-grow: 1;
  flex-basis: 50px;
  width: 50px;
  flex-shrink: 1;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const SponsorLogo = styled.img`
  width: 200px;
  margin: 25px;
`;

const A = styled.a`
  margin: 0;
`;

const AboutPage: FC = () => (
  <div>
    <Head>
      <title>About — WebAssembly Summit</title>
    </Head>
    <Header>
      <HomeButton>
        <Link href="/index.html" as="/">
          <HomeButton>
            <Logo src="webassembly-logo.svg" alt="WebAssembly Summit Logo" />
            <WebAssemblySummit>WebAssembly Summit</WebAssemblySummit>
          </HomeButton>
        </Link>
      </HomeButton>
      <NavItems>
        <Button>
          <Link href="/news.html" as="/news">
            <a>News</a>
          </Link>
        </Button>
        <Button>
          <Link href="/speakers.html" as="/speakers">
            <a>Speakers</a>
          </Link>
        </Button>
        <Button>
          <Link href="/schedule.html" as="/schedule">
            <a>Schedule</a>
          </Link>
        </Button>
        <Button>
          <Link href="/about.html" as="/about">
            <a>About</a>
          </Link>
        </Button>
        <Button>
          <FaTwitter size={24}></FaTwitter>
        </Button>
        <Button>
          <FaYoutube size={24}></FaYoutube>
        </Button>
      </NavItems>
    </Header>
    <Heading>About the Event</Heading>
    <AboutContainer>
      <ContentContainer id="faq">
        <Row>
          <Faq heading="Is this a community event?">
            <div>
              Yes, the summit is organised by individual people in the
              WebAssembly community, and at the time of writing sponsored by
              Google and Mozilla.
            </div>
            <SponsorLogo src="google-logo.svg" alt="Google Logo" />
            <SponsorLogo src="mozilla-logo.svg" alt="Mozilla Logo" />
          </Faq>
          <Faq heading="Will you have a livestream?">
            Yes, the summit will be livestreamed on Youtube and posted here once
            available. So no worries, even if you are not able to attend, you
            will be able to follow the event.
          </Faq>
          <Faq heading="Will you record the talks?">
            Yes, the talks will be uploaded on Youtube and posted here once
            available. So no worries, even if you cannot attend or follow the
            livestream, you will be able to catch up on the talks later once
            they are published.
          </Faq>
          <Faq heading="What if I need help?">
            On-site, conference staff will be identifiable by their Wasm purple
            tshirts with "STAFF" on their back. If you need help of any kind, to
            report a bad situation, or anything else not specified that we can
            help with, please find us on site, DM us on twitter, or call/text.
          </Faq>
          <Faq heading="Do you have a code of conduct?">
            WebAssembly Summit is intended an inclusive conference for everyone
            and will enforce the linked{" "}
            <a href="https://github.com/WebAssemblySummit/webassemblysummit.github.io/blob/dev/CODE_OF_CONDUCT.md">
              code of conduct
            </a>{" "}
            to make sure everybody feels welcome and safe.
          </Faq>
          <Faq heading="How to find you on Twitter?">
            The official hashtag of the conference is{" "}
            <a href="https://twitter.com/search?q=%23WasmSummit&src=typed_query">
              #WasmSummit
            </a>
            . There is no dedicated Twitter account for the conference.
          </Faq>
          <Faq heading="Do you have a live chat?">
            The official chat channel of the conference is the{" "}
            <a href="http://discordapp.com/invite/nEFErF8">#summit</a> channel
            on the WebAssembly Discord. Here you can exchange with the
            organizers or other attendees before, during or after the
            conference.
          </Faq>
          <Faq heading="Who are the organizers of this event?">
            The organizers are (in alphabetical order):
            <ul>
              <li>Aaron Turner</li>
              <li>Ashley Williams</li>
              <li>Michael Hablich</li>
              <li>Surma</li>
              <li>Thomas Tränkler</li>
              <li>Till Schneidereit</li>
            </ul>
            If you need to get in contact with the organizers for whatever
            reason, please send an email to{" "}
            <a href="mailto:wasm-summit-2020@chromium.org">
              wasm-summit-2020@chromium.org
            </a>
            . <br />
            <br />
            Thanks for all the support from the WebAssembly community!
          </Faq>
        </Row>
      </ContentContainer>
    </AboutContainer>
  </div>
);

const HomeButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const WebAssemblySummit = styled.div`
  margin: 0 40px;
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px;
`;

const Button = styled.div`
  margin: 0 20px;
`;

const Header = styled.div`
  display: flex;
  background: #1b1d6e;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
  position: sticky;
  top: 0;

  a {
    color: #fff;
    &:visited {
      color: #fff;
    }
    margin: 20px;
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    a {
      margin: 10px;
      font-size: 1em;
    }
  }
`;

const AboutContainer = styled.div`
  padding: 50px 5%;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin: 0px 0 0px 0;
  padding: 5px 75px 15px 75px;
  border-bottom: 5px solid rgba(255, 255, 255, 0.5);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  background-color: #1b1d6e;
`;

const Question = styled.div`
  font-size: 1.5em;
  margin: 0 25px 0 0;
  padding: 15px 15px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
`;

const Answer = styled.div`
  font-size: 1.2em;
  margin: 25px 25px 0 0;
  padding: 0 15px 50px 25px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
`;

const ContentContainer = styled.div`
  background-color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "transparent"};
  box-shadow: ${(props: { primary?: boolean }) =>
    props.primary ? "0px 5px 30px rgba(0,0,0,0.01)" : "0px"};
  color: #fff;
  border-radius: 5px;

  a {
    color: white;
    text-decoration: underline;
    &:visited {
      color: white;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  /*   grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  align-content: center;
  margin-top: 2vh; */
`;

const Row = styled.div`
  columns: auto;
  column-width: 500px;
  column-gap: 50px;
`;

const SingleOrganizer = styled.div`
  img {
    height: 250px;
    width: 250px;
    padding: 10px;
    border: 1px dashed rgba(0, 0, 0, 0.3);
    object-fit: cover;
  }
  h3 {
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
  }
  margin: 10px 0px;
`;

export default AboutPage;
