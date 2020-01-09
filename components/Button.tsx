import styled from "styled-components";
export const Button = styled.a`
  font-size: 1.6rem;
  padding: 15px 20px;
  background: ${(props: { primary?: boolean }) =>
    props.primary ? "#2D16A4" : "#fff"};
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 3vh 20px;
  color: ${(props: { primary?: boolean }) =>
    props.primary ? "#fff" : "#2D16A4"};
  transition: all 0.1s ease;
  display: inline-block;

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.07);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 10px 5px;
  }
`;

export const CallToAction = styled.div`
  margin: 0 auto;
  text-align: center;
`;
