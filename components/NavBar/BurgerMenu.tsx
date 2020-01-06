import { FC } from "react";
import styled from "styled-components";
import { IoMdMenu } from "react-icons/io";

const BurgerMenu: FC = () => (
  <Button>
    <IoMdMenu size={35}></IoMdMenu>
  </Button>
);

export default BurgerMenu;

const Button = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 20px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
