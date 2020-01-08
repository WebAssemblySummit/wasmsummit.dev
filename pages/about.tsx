import { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const title = "About the event";

const AboutPage: FC = () => (
  <>
    <DarkLayer></DarkLayer>
    <NavBar title={title} currentPage="About" backgroundColor="#1b1d6e" />
    {/* <Header title={title} /> */}
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
          <Faq heading="Who are the organizers?">
            The organizers are (in alphabetical order):
            <ul>
              <li>Aaron Turner</li>
              <li>Ashley Williams</li>
              <li>Michael Hablich</li>
              <li>Surma</li>
              <li>Thomas Tränkler</li>
              <li>Till Schneidereit</li>
            </ul>
          </Faq>
          <Faq heading="How to contact you?">
            If you need to get in contact with the organizers for whatever
            reason, please send an email to{" "}
            <a href="mailto:wasm-summit-2020@chromium.org">
              wasm-summit-2020@chromium.org
            </a>
            . <br />
            <br />
            Thanks for all the support from the WebAssembly community!
          </Faq>
          <Faq heading="Are you on Twitter?">
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
          <Faq heading="Which hotels can you recommend?">
            Hotels can be expensive in Mountain View.{" "}
            <a href="https://www.airbnb.com/s/1625-Plymouth-St--Mountain-View--Kalifornien--USA/all">
              AirBnB
            </a>{" "}
            is a moderately priced option with offers around the conference
            site.
          </Faq>
          <Faq heading="What is your Code of Conduct?">
            WebAssembly Summit is intended an inclusive conference for everyone
            and will enforce our{" "}
            <a href="https://github.com/WebAssemblySummit/webassemblysummit.github.io/blob/dev/CODE_OF_CONDUCT.md">
              code of conduct
            </a>{" "}
            to make sure everybody feels welcome and safe. On-site, conference
            staff will be identifiable by their Wasm purple tshirts with "STAFF"
            on their back. If you need help of any kind, to report a bad
            situation, or anything else not specified that we can help with,
            please find us on site, DM us on twitter, or call/text.
          </Faq>
        </Row>
      </ContentContainer>
    </AboutContainer>
  </>
);

export default AboutPage;

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

export const DarkLayer = styled.div`
  background-color: hsla(237, 60%, 48%, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const SponsorLogo = styled.img`
  width: 175px;
  margin: 20px;
`;

const A = styled.a`
  margin: 0;
`;

const AboutContainer = styled.div`
  padding: 7vh 5%;
`;

const Question = styled.div`
  font-size: 1.5em;
  margin: 0 25px 0 0;
  padding: 15px 15px;
  font-weight: ${(props: { bold?: boolean }) => (props.bold ? 700 : "normal")};
  border-bottom: 3px solid rgba(255, 255, 255, 0.4);
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
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
