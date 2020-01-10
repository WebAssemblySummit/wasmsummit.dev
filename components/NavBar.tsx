import { FC, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaDiscord
} from "react-icons/fa";
import { IconType } from "react-icons/lib/cjs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import Header from "./Header";
import { useScrollDirection, UP } from "../hooks/useScrollDirection";

const NavBar: FC<{
  backgroundColor?: string;
  title?: string;
  bottom?: boolean;
}> = ({ title, bottom, backgroundColor }) => {
  const [open, setOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const { pathname } = useRouter();
  const Box = bottom ? BottomBox : TopBox;
  const onClick = () => setOpen(!open);

  return (
    <>
      <Box
        backgroundColor={backgroundColor}
        style={{
          transform: scrollDirection == UP ? "none" : "translateY(100%)",
          transition: "150ms"
        }}
      >
        <Link href="/" as="/" passHref>
          <a>
            <HomeButton>
              <Logo src="webassembly-logo.svg" alt="WebAssembly Summit Logo" />
              <Header title={title}></Header>
              <WebAssemblySummit active={pathname === "/"}>
                WebAssembly Summit
              </WebAssemblySummit>
            </HomeButton>
          </a>
        </Link>
        <LeftSpacer />
        <NavItems>
          {/* {textNavItems.map(({ label, link }) =>
            currentPage && currentPage === label ? (
              <Link key={label} href={link} as={link} passHref>
                <a>
                  <ActiveButton key={label}>{label}</ActiveButton>
                </a>
              </Link>
            ) : (
              <Link key={label} href={link} as={link} passHref>
                <a>
                  <Button key={label}>{label}</Button>
                </a>
              </Link>
            )
          )} */}
          {iconNavItems.map(({ Icon, label, url, external }, index) =>
            external ? (
              <a key={url} href={url} target={external && "_blank"}>
                <Button>
                  <Icon size={24} style={{ margin: 8 }} />{" "}
                  <ButtonText>{label}</ButtonText>
                </Button>
              </a>
            ) : pathname && pathname === url ? (
              <Link key={url} href={url} as={url} passHref>
                <a target={external && "_blank"}>
                  <ActiveButton>
                    <Icon size={24} style={{ margin: 8 }} />{" "}
                    <ButtonText>{label}</ButtonText>
                  </ActiveButton>
                </a>
              </Link>
            ) : url ? (
              <Link key={url} href={url} as={url} passHref>
                <a target={external && "_blank"}>
                  <Button>
                    <Icon size={24} style={{ margin: 8 }} />{" "}
                    <ButtonText>{label}</ButtonText>
                  </Button>
                </a>
              </Link>
            ) : (
              <a key={index}>
                <Button>
                  <Icon size={24} style={{ margin: 8 }} />{" "}
                  <ButtonText>{label}</ButtonText>
                </Button>
              </a>
            )
          )}
        </NavItems>
        <RightSpacer />
        <BurgerButton>
          <a onClick={onClick}>
            {open ? (
              <IoMdClose size={35}></IoMdClose>
            ) : (
              <IoMdMenu size={35}></IoMdMenu>
            )}
          </a>
        </BurgerButton>
      </Box>
      <Popup open={open} backgroundColor={backgroundColor}>
        {iconNavItems.map(({ label, url, Icon, external }, index) =>
          external ? (
            <a key={url} href={url}>
              <PopupButton>
                <Icon size={30} style={{ margin: 10 }} />
                <PopupButtonText>{label}</PopupButtonText>
              </PopupButton>
            </a>
          ) : url ? (
            <Link key={url} href={url} as={url} passHref>
              <a>
                <PopupButton>
                  <Icon size={30} style={{ margin: 10 }} />
                  <PopupButtonText>{label}</PopupButtonText>
                </PopupButton>
              </a>
            </Link>
          ) : (
            <a key={index}>
              <PopupButton>
                <Icon size={30} style={{ margin: 10 }} />
                <PopupButtonText>{label}</PopupButtonText>
              </PopupButton>
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

const iconNavItems: {
  Icon: IconType;
  label?: string;
  url?: string;
  external?: boolean;
}[] = [
  {
    Icon: FaQuestionCircle,
    label: "About",
    url: "/about"
  },
  /*   {
    Icon: GoPerson,
    label: "Speakers",
    url: "/speakers"
  }, */
  {
    Icon: FaMapMarkerAlt,
    label: "Venue",
    url: "https://goo.gl/maps/uvivRUCkjAmC5Jqo6",
    external: true
  },
  {
    Icon: FaDiscord,
    label: "Chat",
    url: "https://t.co/d2gFhvbr1t?amp=1",
    external: true
  },
  {
    Icon: FaTwitter,
    label: "Twitter",
    url: "https://twitter.com/search?q=%23WasmSummit&src=typed_query",
    external: true
  }
  /* {
    Icon: FaYoutube,
    label: "Youtube"
  } */
];

const HomeButton = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 0 0 2vw;
  &:hover {
    color: white;
  }

  @media screen and (max-width: 799px) {
    padding: 0px 0 0 8vw;
  }

  @media screen and (max-width: 500px) {
    padding: 0px 0 0 15px;
  }
`;

const WebAssemblySummit = styled.div`
  display: flex;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  letter-spacing: 1px;
  white-space: nowrap;
  /*   
  color: ${(props: { active?: boolean }) =>
    props.active ? "white" : "rgb(180, 180, 255)"};
 */  
  color: ${(props: { active?: boolean }) =>
    props.active ? "rgba(255, 255, 255, 1)" : "rgba(200, 200, 240, 0.8)"};
  transition: 150ms;
  padding: 0 15px;
  font-size: 1em;
  font-size: 0.95em;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  flex-basis: 900px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 5px;
  height: 100%;

  @media screen and (max-width: 374px) {
    display: none;
  }
`;

const ActiveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -1;
  padding: 0 2vw 5px 1.5vw;
  height: 60px;
  transition: 150ms;
  border-top: 2px solid white;
  color: white;
  cursor: pointer;
  font-size: 0.95em;
`;

const ButtonText = styled.span`
  color: rgba(220, 220, 255, 1);
  margin-left: 10px;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const PopupButtonText = styled.span`
  color: rgba(220, 220, 255, 1);
  font-size: 1em;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2vw 5px 1.5vw;
  height: 60px;
  transition: 150ms;
  border-top: 2px solid transparent;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-size: 0.95em;

  &:hover {
    color: rgba(255, 255, 255, 1);
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
  overflow-x: scroll;
  overflow-y: hidden;

  /* box-shadow: inset 0px 5px 20px hsla(256, 91%, 10%, 0.8); */
  box-shadow: inset 0px 5px 5px hsla(256, 91%, 10%, 0.4);
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

  @media screen and (max-width: 749px) {
    box-shadow: inset 0px 5px 10px hsla(256, 91%, 10%, 0.3);
    justify-content: center;
  }

  /* iphone X, iPhone XS, iPhone 11 Pro */
  /*  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    padding-bottom: 50px;
  } */

  /* iphone XR, iPhone 11 */
  /*  @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    padding-bottom: 50px;
  } */

  /* iphone XS Max, iPhone 11 Pro max */
  /*  @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    padding-bottom: 50px;
  } */

  /*   @media only screen and (max-height: 414px) and (orientation: landscape) {
    display: none;
  } */
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

  @media screen and (min-width: 375px) {
    display: none;
  }
`;

const Popup = styled.div`
  /* 
  display: flex;
  flex-direction: column;
  align-items: center;
  */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  position: fixed;
  justify-items: center;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 150ms;
  z-index: 0;
  padding-bottom: 58px;
  font-size: 1em;

  transform: ${(props: { open?: boolean; backgroundColor?: string }) =>
    props.open ? "translateY(0)" : "translateY(100%)"};
  background-color: ${(props?: { open?: boolean; backgroundColor?: string }) =>
    props && props.backgroundColor ? props.backgroundColor : undefined};
`;

const PopupButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 30px 2%;
  transition: 150ms;
  width: 100%;
  border-top: 2px solid transparent;
  text-align: center;
  color: white;
`;

const LeftSpacer = styled.div`
  flex: 2;
`;

const RightSpacer = styled.div`
  flex: 5;
`;
