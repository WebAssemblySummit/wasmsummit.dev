export type Speaker = {
  name?: string;
  picture?: string;
  bio?: string;
  company?: string;
  website?: string;
  twitter?: string;
  github?: string;
  talkId?: string;
};

export const speakers: { [id: string]: Speaker } = {
  "1": {
    name: "Lin Clark",
    picture: "/lin-clark.jpg",
    company: "Mozilla",
    website: "https://twitter.com/linclark",
    talkId: "1"
  },
  "2": {
    name: "Alon Zakai",
    company: "Google",
    picture:
      "/alon-zakai.jpeg",
    website: "https://twitter.com/kripken",
    talkId: "2"
  },
  "3": {
    name: "Ashley Williams",
    company: "Cloudflare",
    picture:
      "/ashley-williams.jpg",
    website: "https://twitter.com/ag_dubs",
    talkId: "3"
  },
  "4": {
    name: "Tadeu Zagallo",
    company: "Apple",
    picture: "/tadeu-zagallo.jpg",
    website: "https://twitter.com/tadeuzagallo",
    talkId: "4"
  },
  "5": {
    name: "Peter Salomonsen",
    picture:
      "/peter-salomonsen.jpg",
    website: "https://twitter.com/salomonsen_p",
    talkId: "5"
  },
  "6": {
    name: "Johnathan Beri",
    picture:
      "/johnathan-beri.jpeg",
    website: "https://twitter.com/beriberikix",
    talkId: "6"
  },
  "7": {
    name: "Kevin Hoffman",
    picture: "/kevin-hoffman.jpeg",
    website: "https://twitter.com/kevinhoffman",
    talkId: "7"
  },
  "8": {
    name: "Brion Vibber",
    picture:
      "/brion-vibber.jpg",
    website: "https://twitter.com/brionv",
    talkId: "8"
  },
  "9": {
    name: "Ben Smith",
    company: "Google",
    picture: "/ben-smith.jpg",
    website: "https://twitter.com/binjimint",
    talkId: "9"
  }
};
