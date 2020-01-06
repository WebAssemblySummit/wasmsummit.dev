import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitter /* FaYoutube */ } from "react-icons/fa";
import { IconType } from "react-icons/lib/cjs";
import BurgerMenu from "./BurgerMenu";

const NavBar: FC = () => (
  <Box>
    <Link href="/index.html" as="/">
      <a>
        <HomeButton>
          <Logo src="webassembly-logo.svg" alt="WebAssembly Summit Logo" />
          <WebAssemblySummit>WebAssembly Summit</WebAssemblySummit>
        </HomeButton>
      </a>
    </Link>
    <NavItems>
      {textNavItems.map(({ label, link }) =>
        link ? (
          <Button key={label}>
            <Link href={`${link}.html`} as={link}>
              <a>{label}</a>
            </Link>
          </Button>
        ) : (
          <ButtonDisabled key={label}>
            <a>{label}</a>
          </ButtonDisabled>
        )
      )}
      {iconNavItems.map(({ Icon, url }) => (
        <Button key={url}>
          <a href={url}>
            <Icon size={24}></Icon>
          </a>
        </Button>
      ))}
    </NavItems>
    <BurgerMenu />
  </Box>
);

export default NavBar;

const Logo = styled.img`
  width: 40px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 390px) {
    width: 30px;
  }
`;

const textNavItems: {
  label: string;
  link?: string;
}[] = [
  { label: "News" },
  { label: "Tickets" },
  { label: "Schedule" },
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
  font-size: 20px;
`;

const WebAssemblySummit = styled.div`
  margin: 0 0 0 30px;
  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 390px) {
    margin: 0 0 0 25px;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const Button = styled.div`
  margin: 0 20px;
  transition: 150ms;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonDisabled = styled.div`
  margin: 0 20px;
  color: rgba(255, 255, 255, 0.1);
`;

const Box = styled.div`
  display: flex;
  background: linear-gradient(
    0deg,
    rgba(27, 29, 110, 0) 0%,
    rgba(27, 29, 110, 0.1) 25%,
    rgba(27, 29, 110, 0.4) 100%
  );
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  position: sticky;
  padding: 5px;
  bottom: 0;
  left: 0;
  right: 0;

  a {
    color: #fff;
    &:visited {
      color: #fff;
    }
    margin: 10px;
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    a {
      margin: 10px;
      font-size: 1em;
    }
  }
`;
