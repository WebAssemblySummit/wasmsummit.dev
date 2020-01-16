import { FC, ReactNode } from "react";
import styled from "styled-components";
import { NavBar, navbarBlue } from "../components";

const title = "Schedule";

type mockScheduleItem = {
  time: string,
  title: string,
  description?: string
  link?: string
}

const scheduleItems: mockScheduleItem[] = [
  {
    time: "8:00am",
    title: "Breakfast"
  },
  {
    time: "9:15am",
    title: "Introductions"
  },
  {
    time: "9:30am",
    title: "Lin Clark",
    description: "Opening Keynote",
    link: "/speakers/1/"
  },
  {
    time: "10:15am",
    title: "Alon Zakai",
    description: "Shipping Tiny WebAssembly Builds",
    link: "/speakers/2/"
  }

];

const SchedulePage: FC = () => (
  <>
  <Background />
  <NavBar title={title} backgroundColor={navbarBlue} bottom />
  <Container>
    <Headline>{title}</Headline>
    <Schedule>
      {scheduleItems.map(item => {

        let titleAndDescription = (
          <>
          <ScheduleItemTitle>{item.title}</ScheduleItemTitle>
          <ScheduleItemDescription>{item.description}</ScheduleItemDescription>
          </>
        );

        if (item.link) {
          titleAndDescription = (
            <ScheduleLink href={item.link}>
              {titleAndDescription}
            </ScheduleLink>
          )
        }

        let itemJsx = (
          <ScheduleItem>
            <ScheduleItemTime>{item.time}</ScheduleItemTime>
            {titleAndDescription}
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
  font-size: 3em;
  margin-top: 3vh;
  margin-bottom: 0vh;
`;

export const Container = styled.div`
  padding: 3vh 9vw;
  color: white;
`;

export const Schedule = styled.ul`
  list-style-type: none;
  padding: 0px;
  padding-left: 0px;
`;

export const ScheduleItem = styled.li`
  border-left: 2px solid #FFFFFF;

  padding-left: 10px;
  margin-bottom: 10px;
`;

export const ScheduleItemTitle = styled.h2`
  margin-bottom: 5px;
`;

export const ScheduleItemTime = styled.p`

`;

export const ScheduleItemDescription = styled.p`
  margin-top: 0px;
`;

export const ScheduleLink = styled.a`
  color: #FFFFFF;

  :hover {
    text-decoration: underline;
  }
`;



