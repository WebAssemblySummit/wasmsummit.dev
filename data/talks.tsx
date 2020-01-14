import { ReactNode } from "react";
import styled from "styled-components";

const SmallFont = styled.span`
  font-size: 0.8em;
`;
export type Talk = {
  speakerId?: string;
  title?: ReactNode;
  time?: {
    start?: string;
    end?: string;
  };
  abstract?: ReactNode;
};

export const talks: { [id: string]: Talk } = {
  "1": {
    speakerId: "1",
    title: "Opening Keynote"
  },
  "2": {
    speakerId: "2",
    title: "Shipping Tiny WebAssembly Builds",
    abstract:
      "Code size matters in many places, especially (but not only!) on the Web. This talk will present current best practices in generating small WebAssembly builds when using popular toolchains like LLVM, Emscripten, Rust, Go, and AssemblyScript."
  },
  "3": {
    speakerId: "3",
    title: (
      <SmallFont>
        Why the #wasmsummit Website isn't written in Wasm, and what that means
        for the future of Wasm
      </SmallFont>
    ),
    abstract: (
      <>
        <p>
          WebAssembly is not here to kill JavaScript. In fact, to be successful,
          it *must not*. But let me back up.
        </p>

        <p>
          WebAssembly is an exciting new technology that has the ambition to
          change how and what we program for not only the web, but everywhere.
          In the case of the web platform, WebAssembly's promise has led many to
          declare that WebAssembly's entrance means the death of JavaScript.
          This belief is not only reactionary, but deeply short-sighted, and
          likely to threaten the successful wide-spread adoption of WebAssembly.
        </p>

        <p>
          In this talk, we'll use the WebAssembly Summit website to discuss the
          uses and misuses of WebAssembly on the web. We'll explore the
          historical and material conditions of the web, past and present, to
          understand *how* and *why* the web changes and what its current
          trajectory is. With this understanding, we'll explore how WebAssembly
          can navigate this unique moment and discuss the practical implications
          of the specification's growth and better tooling as WebAssembly
          searches for its place in the web platform and beyond.
        </p>
      </>
    )
  },
  "4": {
    speakerId: "4",
    title: "JavaScriptCore's new WebAssembly interpreter",
    abstract:
      "In this talk, we will look at JavaScriptCore's newest WebAssembly tier, the Low Level Interpreter (LLInt). With the addition of the interpreter, JavaScriptCore now uses three tiers to execute WebAssembly: LLInt, BBQ and OMG. Because of the new interpreter, WebAssembly programs executing in JavaScriptCore now start up 3x faster. Because of the three-tiered approach, we were able to achieve this while maintaining the same throughput performance."
  },
  "5": {
    speakerId: "5",
    title: "WebAssembly Music",
    abstract:
      "Been playing with computer music since the 80s from the tracker era to modern soft synths and DAWs, and even writing some myself. Recently as WebAssembly  came along with excellent performance, and AudioWorklet technology in  providing low latency audio, it's finally possible to use the web for serious music production. As a programmer I like to use a programming language for expressing the music, and also for synthesizing the instruments. I compose my music in Javascript and create my instruments in AssemblyScript which is compiled to WebAssembly. It's all running in the browser. You can write the music in a live coding-environment, and you can play and record the instruments with a midi-keyboard."
  },
  "6": {
    speakerId: "6",
    title:
      "Making it easier to make Things: WebAssembly and the Internet of Things",
    abstract:
      "WebAssembly is moving beyond the browser - but is it ready for IoT apps and tiny embedded devices? Yes...ish. In this talk, learn about the state of running Wasm on embedded devices (as low as 512kb of RAM & 64 MHz) and what's left to solve. Also learn where Wasm can today help with IoT protocols and tools."
  },
  "7": {
    speakerId: "7",
    title: "Building a Containerless Future with WebAssembly",
    abstract:
      "WebAssembly is the future of distributed computing. Its security, memory isolation, small footprint, and true portability are all advantages on the web, but become truly game-changing when used to build functions and services deployed in the cloud. This session illustrates how to host WebAssembly modules in Rust code, how to build modules in many different languages (including pros and cons of each), and how to securely grant cloud-native capabilities to these modules. Discussed in detail is the current state of the art in WebAssembly and what can be built with it today. Learn what developers can start doing now to build the containerless future where WebAssembly modules are the de-facto unit of immutable deployment in the cloud, at the edge, and even in IoT and embedded devices."
  },
  "8": {
    speakerId: "8",
    title: "WebAssembly as a <video> polyfill",
    abstract:
      "An introduction to Wikipedia's ogv.js media compatibility shim, which uses WebAssembly codecs to provide video file format compatibility for VP9 and AV1 video in browsers that don't play them natively. Will explore the division between the JS and Wasm parts of the code base, and how advances in emscripten and LLVM create opportunities and challenges for performance as different browsers implement different levels of the spec (threading, SIMD, etc)."
  },
  "9": {
    speakerId: "9",
    title: "Closing Keynote"
  }
};

"";
