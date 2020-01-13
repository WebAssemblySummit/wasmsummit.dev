import { ReactNode } from "react";

export type Talk = {
  speakerId?: string;
  title?: string;
  time?: {
    start: Date;
    end: Date;
  };
  abstract?: ReactNode;
};

export const talks: { [id: string]: Talk } = {
  "1": {
    speakerId: "1",
    title: "Javascript's Journey to the Edge",
    time: {
      start: new Date(),
      end: new Date()
    },
    abstract: (
      <>
        <p>
          In September of 2008, Google’s Chromium Project released V8, a
          JavaScript engine, as part of a browser optimization wave that
          heralded the era of JavaScript browser applications that we both love,
          and love to hate. Less than a year later, in 2009, Ryan Dahl announced
          (at this very conference!) a way to run the V8 browser environment
          outside of the browser- Node.js, a platform that held the promise of
          unifying web application development, where both client and server
          side development could happen in the same language - JavaScript.
        </p>
        <p>
          A decade later, V8, JavaScript, and its new buddy WebAssembly, have
          expanded to lands charted only a few years after Node.js debuted-
          known (confusingly) as the “Edge”. In this talk, we’ll introduce what
          the “Edge” is and why we are excited for it to revolutionize
          computation on the web. We’ll explore how this adventurous JavaScript
          engine, V8, is so well suited to tasks previously limited to Virtual
          Machines, Containers, or even simply Operating Systems. Finally, we’ll
          talk about security, Spectre, and ask ourselves the age old question,
          “You can do it, but should you?”.
        </p>
        <p>
          In true JSConf EU tradition, this talk itself is going be an exciting
          announcement. You should come if you want to be there for the
          beginning of a new era of the Internet.
        </p>
      </>
    )
  }
};
