export type ScheduleDataItem = {
  time: string,
  title: string,
  description?: string
  link?: string 
}

export const schedule: ScheduleDataItem[] = [
  {
    time: "8:00am",
    title: "Breakfast"
  },
  {
    time: "9:00am",
    title: "Introductions"
  },
  {
    time: "9:15am",
    title: "Lin Clark",
    description: "WebAssembly: Building a new kind of ecosystem",
    link: "/speakers/1/"
  },
  {
    time: "9:55am",
    title: "Alon Zakai",
    description: "Shipping Tiny WebAssembly Builds",
    link: "/speakers/2/"
  },
  {
    time: "10:30am",
    title: "Morning Coffee Break"
  },
  {
    time: "11:15am",
    title: "Ashley Williams",
    description: "Why the #wasmsummit Website isn't written in Wasm, and what that means for the future of Wasm",
    link: "/speakers/3/"
  },
  {
    time: "12:05pm",
    title: "Tadeu Zagallo",
    description: "JavaScriptCore's new WebAssembly interpreter",
    link: "/speakers/4/"
  },
  {
    time: "12:40pm",
    title: "Lunch"
  },
  {
    time: "2:05pm",
    title: "Peter Salomonsen",
    description: "WebAssembly Music",
    link: "/speakers/5/"
  },
  {
    time: "2:50pm",
    title: "Jonathan Beri",
    description: "Making it easier to make Things: WebAssembly and the Internet of Things",
    link: "/speakers/6/"
  },
  {
    time: "3:25pm",
    title: "Afternoon Coffee Break"
  },
  {
    time: "4:10pm",
    title: "Kevin Hoffman",
    description: "Building a Containerless Future with WebAssembly",
    link: "/speakers/7/"
  },
  {
    time: "4:45pm",
    title: "Brion Vibber",
    description: "WebAssembly as a <video> polyfill",
    link: "/speakers/8/"
  },
  {
    time: "5:35pm",
    title: "Ben Smith",
    description: "Closing Keynote",
    link: "/speakers/9/"
  },
  {
    time: "6:15pm",
    title: "Conference End / Evening Social Hour",
  }
];
