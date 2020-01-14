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
    twitter: "https://twitter.com/linclark",
    talkId: "1"
  },
  "2": {
    name: "Alon Zakai",
    company: "Google",
    picture: "/alon-zakai.jpeg",
    website: "https://twitter.com/kripken",
    talkId: "2"
  },
  "3": {
    name: "Ashley Williams",
    company: "Cloudflare",
    picture: "/ashley-williams.jpg",
    talkId: "3",
    website: "https://twitter.com/ag_dubs"
  },
  "4": {
    name: "Tadeu Zagallo",
    company: "Apple",
    picture: "/tadeu-zagallo.jpg",
    talkId: "4",
    website: "https://tadeuzagallo.com"
  },
  "5": {
    name: "Peter Salomonsen",
    picture: "/peter-salomonsen.jpg",
    talkId: "5",
    website: "https://petersalomonsen.com"
  },
  "6": {
    name: "Johnathan Beri",
    picture: "/johnathan-beri.jpeg",
    talkId: "6",
    website: "https://jonathanberi.com/"
  },
  "7": {
    name: "Kevin Hoffman",
    picture: "/kevin-hoffman.jpeg",
    talkId: "7",
    website: "https://twitter.com/kevinhoffman"
  },
  "8": {
    name: "Brion Vibber",
    picture: "/brion-vibber.jpg",
    talkId: "8",
    website: "https://wikimediafoundation.org/profile/brion-vibber/"
  },
  "9": {
    name: "Ben Smith",
    company: "Google",
    picture: "/ben-smith.jpg",
    talkId: "9",
    website: "https://twitter.com/binjimint"
  }
};
