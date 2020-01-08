import { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitter /* FaYoutube */ } from "react-icons/fa";
import { IconType } from "react-icons/lib/cjs";
import { IoMdMenu } from "react-icons/io";

const NavBar: FC<{
  backgroundColor?: string;
  title?: string;
  currentPage?: string;
  bottom?: boolean;
}> = ({ title, currentPage, bottom, backgroundColor }) => {
  const [open, setOpen] = useState(false);
  const Box = bottom ? BottomBox : TopBox;
  const onClick = () => setOpen(!open);

  return (
    <>
      <Box backgroundColor={backgroundColor}>
        <Link href="/" as="/" passHref>
          <a>
            <HomeButton>
              <Logo src="webassembly-logo.svg" alt="WebAssembly Summit Logo" />
              {/* <Header title={title}></Header> */}
              <WebAssemblySummit active={!currentPage}>
                WebAssembly Summit
              </WebAssemblySummit>
            </HomeButton>
          </a>
        </Link>
        <NavItems>
          {textNavItems.map(({ label, link }) =>
            currentPage && currentPage === label ? (
              <Link key={link} href={link} as={link} passHref>
                <a>
                  <ActiveButton key={label}>{label}</ActiveButton>
                </a>
              </Link>
            ) : (
              <Link key={link} href={link} as={link} passHref>
                <a>
                  <Button key={label}>{label}</Button>
                </a>
              </Link>
            )
          )}
          {iconNavItems.map(({ Icon, url }) => (
            <a key={url} href={url}>
              <Button>
                <Icon size={24} style={{ marginTop: 0 }}></Icon>
              </Button>
            </a>
          ))}
        </NavItems>
        <BurgerButton>
          <a onClick={onClick}>
            <IoMdMenu size={35}></IoMdMenu>
          </a>
        </BurgerButton>
      </Box>
      <Popup open={open} backgroundColor={backgroundColor}>
        {textNavItems.map(({ label, link }) =>
          link ? (
            <Link key={link} href={link} as={link} passHref>
              <a>
                <PopupButton>{label}</PopupButton>
              </a>
            </Link>
          ) : (
            <a>
              <PopupButton key={link}>{label}</PopupButton>
            </a>
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
  /* { label: "News", link: "/news" }, */
  /* { label: "Schedule", link: "/schedule" }, */
  /* { label: "Speakers", link: "/speakers" }, */
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
  padding: 0 2vw;
  &:hover {
    color: white;
  }
`;

const WebAssemblySummit = styled.div`
  display: flex;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  letter-spacing: 1px;
  /*   
  color: ${(props: { active?: boolean }) =>
    props.active ? "white" : "rgb(180, 180, 255)"};
 */  
  color: ${(props: { active?: boolean }) =>
    props.active ? "white" : "rgba(255, 255, 255, 0.75)"};
  transition: 150ms;
  padding: 0 10px;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 749px) {
    font-size: 0.9em;
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3vw;
  height: 60px;
  transition: 150ms;
  border-top: 2px solid white;
  color: white;
  cursor: pointer;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 3vw;
  height: 60px;
  transition: 150ms;
  border-top: 2px solid transparent;

  &:hover {
    border-top: 2px solid white;
  }
`;

const BottomBox = styled.div`
  display: flex;
  z-index: 1;
  /* background: #1b1d6e; */
  background: rgb(20, 20, 20);
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  /* box-shadow: inset 0px 5px 20px hsla(256, 91%, 10%, 0.8); */
  box-shadow: inset 0px 5px 20px hsla(256, 0%, 0%, 0.3);
  background-color: ${(props?: { open?: boolean; backgroundColor?: string }) =>
    props && props.backgroundColor ? props.backgroundColor : undefined};

  a {
    /*     color: #fff;
    &:visited {
      color: #fff;
    }
 */
    font-size: 1.2em;
  }
`;

const TopBox = styled.div`
  display: flex;
  z-index: 1;
  /* background: #1b1d6e; */
  /* background: rgb(20, 20, 20); */
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;

  /* box-shadow: inset 0px 5px 20px hsla(256, 91%, 10%, 0.8); */
  box-shadow: inset 0px 5px 20px hsla(256, 0%, 0%, 0.3);
  background-color: ${(props?: { open?: boolean; backgroundColor?: string }) =>
    props && props.backgroundColor ? props.backgroundColor : undefined};

  a {
    font-size: 1.2em;
    /*     
    color: #fff;
    
    &:visited {
      color: #fff; 
    } 
    */
  }
`;

const BurgerButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 10px 20px;
  cursor: pointer;

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
  width: 100%;
  height: 100vh;
  padding-top: 58px;
  font-size: 1.5em;

  transform: ${(props: { open?: boolean; backgroundColor?: string }) =>
    props.open ? "translateY(0)" : "translateY(-100%)"};
  background-color: ${(props?: { open?: boolean; backgroundColor?: string }) =>
    props && props.backgroundColor ? props.backgroundColor : undefined};
`;

const PopupButton = styled.div`
  margin: 0;
  padding: 20px 2%;
  transition: 150ms;
  width: 100%;
  border-top: 2px solid transparent;
  text-align: center;
`;
