import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitter /* FaYoutube */ } from "react-icons/fa";
import { IconType } from "react-icons/lib/cjs";

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
  </Box>
);

export default NavBar;

const Logo = styled.img`
  width: 50px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);
`;

const textNavItems: {
  label: string;
  link?: string;
}[] = [
  { label: "News" },
  { label: "Speakers" },
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
  margin: 0 0 0 40px;
  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`;

const NavItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0 15px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Button = styled.div`
  margin: 0 20px;
  transition: 150ms;
  text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.1);
    a {
    }
  }
`;

const ButtonDisabled = styled.div`
  margin: 0 20px;

  a {
    color: rgba(255, 255, 255, 0.25);
  }
`;

const Box = styled.div`
  display: flex;
  background: #1b1d6e;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
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
