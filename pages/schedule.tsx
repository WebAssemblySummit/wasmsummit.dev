import { FC, ReactNode } from "react";
import styled from "styled-components";
import { NavBar, navbarBlue } from "../components";

import { schedule } from '../data/schedule';

const title = "Schedule";

const SchedulePage: FC = () => (
  <>
  <Background />
  <NavBar title={title} backgroundColor={navbarBlue} bottom />
  <Container>
    <Headline>{title}</Headline>
    <Schedule>
      {schedule.map((item, index) => {

        let title = (
          <ScheduleItemTitle>{item.title}</ScheduleItemTitle>
        );

        let description;
        if (item.description) {
          description = (
            <ScheduleItemDescription>{item.description}</ScheduleItemDescription>
          )
        }

        let itemContent = (
          <>
            {title}
            {description}
          </>
        );
        if (item.link) {
          itemContent = (
            <ScheduleLink href={item.link}>
              {itemContent}
            </ScheduleLink>
          )
        }

        let itemJsx = (
          <ScheduleItem key={index}>
            <ScheduleItemTimeDesktop>{item.time}</ScheduleItemTimeDesktop>
            <ScheduleItemCircle />
            <ScheduleItemContent>
              <ScheduleItemTimeMobile>{item.time}</ScheduleItemTimeMobile>
              {itemContent}
            </ScheduleItemContent>
          </ScheduleItem>
        );

        return itemJsx;
      })}
    </Schedule>
  </Container>
  </>
);

export default SchedulePage;

export const Background = styled.div`
  background-color: hsla(237, 0%, 48%, 0.15);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

export const Headline = styled.h1`
  text-align: center;
  font-size: 3em;
  margin-top: 3vh;
  margin-bottom: 0vh;

  @media screen and (max-width: 500px) {
    font-size: 2.5em;
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
`;

export const Container = styled.div`
  padding: 3vh 9vw;
  color: white;
`;

export const Schedule = styled.ul`
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  list-style-type: none;
  padding: 0px;
  padding-left: 0px;
`;

export const ScheduleItem = styled.li`
  display: flex;
  flex-direction: row;
 
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const ScheduleItemTimeDesktop = styled.p`
  font-size: 1em;
  color: #FFFFFF;
  margin: -1px calc(2vw + 5px) 0 0;
  width: 60px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const ScheduleItemTimeMobile = styled.p`
  font-size: 1em;
  font-weight: 700;
  color: #FFFFFF;
  width: 60px;
  line-height: 1.7;
  padding-left: 5px;
  margin-top: -1.3em;
  margin-bottom: 1em;

  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const ScheduleItemCircle = styled.div`
  border-radius: 100%;
  border: 3px solid white;
  margin-right: -8px;
  background: hsla(237, 40%, 48%, 1);
  width: 10px;
  height: 10px;
`;

export const ScheduleItemContent = styled.div`
  break-inside: avoid;
  max-width: 600px;
  flex: 1;
  border-left: 2px dashed rgba(255, 255, 255, 0.15);
  padding-left: calc(3vw + 10px);

  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: -1px;
`;

export const ScheduleItemTitle = styled.h2`
  font-size: 1.3em;
  margin-top: 0;
  padding-left: 5px;
  font-weight: normal;
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);
`;

export const ScheduleItemDescription = styled.p`
  font-size: 1.5em;
  margin-top: 0px;
  margin-bottom: 15px;
  padding: 0 15px 0 5px;
  font-weight: 700;
  text-shadow: 2px 4px 5px hsla(237, 80%, 35%, 0.3);

  @media screen and (max-width: 500px) {
    font-size: 1.4em;
    font-weight: normal;
  }
`;

export const ScheduleLink = styled.a`
  color: #FFFFFF;

  :hover {
    text-decoration: underline;
  }
`;



