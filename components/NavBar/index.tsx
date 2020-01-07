import { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitter /* FaYoutube */ } from "react-icons/fa";
import { IconType } from "react-icons/lib/cjs";
import { IoMdMenu } from "react-icons/io";

const NavBar: FC<{
  title?: string;
  currentPage?: string;
  bottom?: boolean;
}> = ({ title, currentPage, bottom }) => {
  const [open, setOpen] = useState(false);
  const Box = bottom ? BottomBox : TopBox;

  return (
    <>
      <Box>
        <Link href="/" as="/">
          <A>
            <HomeButton>
              <Logo src="webassembly-logo.svg" alt="WebAssembly Summit Logo" />
              {/* <Header title={title}></Header> */}
              <WebAssemblySummit active={!currentPage}>
                <span>WebAssembly Summit</span>
              </WebAssemblySummit>
            </HomeButton>
          </A>
        </Link>
        <NavItems>
          {textNavItems.map(({ label, link }) =>
            link ? (
              currentPage && currentPage === label ? (
                <Link key={link} href={link} as={link}>
                  <ActiveButton key={label}>
                    <A>{label}</A>
                  </ActiveButton>
                </Link>
              ) : (
                <Link key={link} href={link} as={link}>
                  <Button key={label}>
                    <A>{label}</A>
                  </Button>
                </Link>
              )
            ) : (
              <ButtonDisabled key={link}>
                <A>{label}</A>
              </ButtonDisabled>
            )
          )}
          {/* {iconNavItems.map(({ Icon, url }) => (
            <Button key={url}>
              <a href={url}>
                <Icon size={24}></Icon>
              </A>
            </Button>
          ))} */}
        </NavItems>
        <BurgerButton onClick={() => setOpen(!open)}>
          <IoMdMenu size={35}></IoMdMenu>
        </BurgerButton>
      </Box>
      <Popup open={open}>
        {textNavItems.map(({ label, link }) =>
          link ? (
            <Link key={link} href={link} as={link}>
              <PopupButton>
                <A>{label}</A>
              </PopupButton>
            </Link>
          ) : (
            <PopupButton key={link}>
              <A>{label}</A>
            </PopupButton>
          )
        )}
      </Popup>
    </>
  );
};

export default NavBar;

const Logo = styled.img`
  width: 27px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);
  margin: 0 15px;
`;

const textNavItems: {
  label: string;
  link?: string;
}[] = [
  /* { label: "News" },
  { label: "Tickets" }, 
  { label: "Schedule" },*/
  {
    label: "About",
    link: "/about"
  }
];

const iconNavItems: { Icon: IconType; url: string }[] = [
  {
    Icon: FaTwitter,
    url: "https://twitter.com/search?q=%23WasmSummit&src=typed_query"
  }
  /*   {
    Icon: FaYoutube
  } */
];

const HomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    color: white;
  }
`;

const WebAssemblySummit = styled.div`
  display: flex;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  letter-spacing: 1px;
  color: ${(props: { active?: boolean }) =>
    props.active ? "white" : "rgb(180, 180, 255)"};
  transition: 150ms;
  padding: 0 10px;

  &:hover {
    color: white;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0 15px;
  height: 100%;

  @media screen and (max-width: 749px) {
    display: none;
  }
`;

const ActiveButton = styled.div`
  margin: 0;
  padding: 20px 2%;
  transition: 150ms;
  height: 100%;
  border-top: 2px solid white;

  a {
    color: white;
  }
`;

const Button = styled.div`
  margin: 0;
  padding: 20px 2%;
  transition: 150ms;
  height: 100%;
  border-top: 2px solid transparent;

  &:hover {
    border-top: 2px solid white;
    /* text-shadow: 0 0 10px rgba(255, 255, 255, 0.4); */
  }
`;

const ButtonDisabled = styled.div`
  margin: 0 2%;
  padding: 20px 15px;
  color: rgba(255, 255, 255, 0.1);
`;

const BottomBox = styled.div`
  display: flex;
  z-index: 1;
  background: #1b1d6e;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: inset 0px 5px 20px hsla(256, 91%, 10%, 0.8);

  a {
    /*     color: #fff;
    &:visited {
      color: #fff;
    }
 */
    margin: 10px;
    font-size: 1.2em;
  }
`;

const TopBox = styled.div`
  display: flex;
  z-index: 1;
  background: #1b1d6e;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;

  box-shadow: inset 0px 5px 20px hsla(256, 91%, 10%, 0.8);
  border-bottom: 2px solid black;

  @media screen and (max-width: 749px) {
    border-bottom: 0px solid black;
    box-shadow: none;
  }

  a {
    /*    color: #fff;
    &:visited {
      color: #fff;
    } */
    margin: 10px;
    font-size: 1.2em;
  }
`;

const BurgerButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 20px;

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 200ms;
  z-index: 0;
  transform: ${(prop: { open?: boolean }) =>
    prop.open ? "translateY(0)" : "translateY(100%)"};
  background-color: #1b1d6e;
  width: 100%;
  height: 100vh;
  padding-top: 58px;
  font-size: 1.5em;
`;

const PopupButton = styled.div`
  margin: 0;
  padding: 20px 2%;
  transition: 150ms;
  width: 100%;
  border-top: 2px solid transparent;
  text-align: center;
`;

const A = styled.a`
  margin: 0;
  color: rgb(180, 180, 255);

  &:hover {
    color: white;
  }
`;
