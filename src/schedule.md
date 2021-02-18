---
layout: default.ejs
permalink: schedule.html
---

<style>
main {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

main a {
  color: var(--off-white);
}

main a:visited {
  color: var(--purple);
}

.speaker-block {
  border-left: dashed var(--white);
  padding-left: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.speaker-block h1 {
  font-size: 2rem;
  border-bottom: solid var(--offwhite);
  margin-top: 0px;
  padding-bottom: 0.5rem;
}

.speaker-block h2 {
  color: var(--white);
  margin-top: 0px;
  margin-bottom: 0px;
}

.speaker-block p {
  color: var(--white);
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}


.speaker-block img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  float: right;
  margin-left: 1em;
  border-radius: 10%;
  max-width: 50vw;
  height: auto;
  aspect-ratio: 1;
}

.speaker-block .speaker-image-contain {
  object-fit: contain;
}

.speaker-block p {}

@media (max-width: 720px) {
  .speaker-block h1 {
    font-size: 1.5rem;
  }

  .speaker-block h2 {
    font-size: 1rem;
  }

}

</style>

# Schedule

_The schedule is still being planned. Please find the order of talks for Wasm Summit below!_

<div class="speaker-block">
  <h1>Opening Keynote</h1>
  <img src="assets/speaker-images/deepti.jpg"></img>
  <h2>Deepti Gandluri</h2>
  <p>The opening keynote will be taking a look at what was acheived in WebAssembly in 2020, and what's to come in 2021!</p>
</div>

<div class="speaker-block">
  <h1>Production Ready Server-Side WebAssembly: The Challenging Parts</h1>
  <img src="assets/speaker-images/saul-cabrera.jpg"></img>
  <h2>Saúl Cabrera</h2>
  <p>
  Shopify is one of the first companies to adopt server-side WebAssembly at scale. It powers our synchronous customization platform, which we are getting ready to launch to more than 1 million merchants.
  <br />
  <br />
  This talk explores Shopify's adoption of WebAssembly, focusing on the challenging parts. WebAssembly fulfills a specific use case within Shopify, but as early adopters, it has become clear that WebAssembly has the potential to change the horizon of possibilities for the software industry. We aim to expose our adoption challenges as opportunities  for the community to improve WebAssembly's ecosystem. To illustrate our vision of WebAssembly's potential, we'll examine the WebAssembly specification, the developer tools and the availability and maturity of programming languages. We'll also discuss how closing the gaps in each of these areas will open the door for existing and potential companies to start using WebAssembly.
  </p>
</div>

<div class="speaker-block">
  <h1>Hit the Ground Running: Wasm Snapshots for Fast Startup</h1>
  <img src="assets/speaker-images/nick-fitzgerald.jpg"></img>
  <h2>Nick Fitzgerald</h2>
  <p>Don't make your users wait while your Wasm module initializes itself! <a href="https://github.com/bytecodealliance/wizer" target="_blank">Wizer</a> instantiates your WebAssembly module, executes its initialization functions, and then snapshots the initialized state out into a new, pre-initialized WebAssembly module. Now you can use this new module to hit the ground running, without waiting for any of that first-time initialization code to complete. This talk will cover the design and implementation of Wizer; discuss its performance characteristics and the scenarios in which it excels and when it isn't the right tool; and finally, in the process of doing all that, we'll take a closer look at what makes up the guts of a WebAssembly module: memories, globals, tables, etc.</p>
</div>

<div class="speaker-block">
  <h1>Grain: Your WebAssembly-First Programming Language</h1>
  <img src="assets/speaker-images/oscar.jpg"></img>
  <h2>Oscar Spencer</h2>
  <p>While WebAssembly allows us to compile many of the languages that we know and love to something browser-compatible, it also opens the door for brand-new languages to share the stage with JavaScript. Grain is a strongly-typed language that aims to bring modern language features to the masses exclusively through WebAssembly. It has its roots in functional programming, but is flexible enough to suit your programming style while helping you catch bugs before runtime. This talk will give you a formal introduction to the language and a new outlook on the future WebAssembly ecosystem.</p>
</div>

<div class="speaker-block">
  <h1>Tensorflow inference on WebAssembly — from 10 minutes to 10 milliseconds</h1>
  <img src="assets/speaker-images/michael-yuan.jpg"></img>
  <h2>Michael Yuan</h2>
  <p>This presentation will cover options to run Tensorflow model inference on WebAssembly. We will start from the unique challenges of deploying AI inference models in production, and how Rust + WebAssembly could help. Using a Mobilenet image classification task as an example,  we will discuss the pros and cons of the plain JS approach, Tensorflow.js, pure Rust crates for Tensorflow compiled to Wasm, and WASI-like Tensorflow Wasm extensions that run on specialized inference chips. We will go through the journey of 60,000x performance gain over different WebAssembly approaches. We will also discuss what’s the future for WebAssembly-based AI on the edge cloud.</p>
</div>

<div class="speaker-block">
  <h1>Raw Wasm: Hand-crafted WebAssembly Demos</h1>
  <img src="assets/speaker-images/ben-smith.jpg"></img>
  <h2>Ben Smith</h2>
  <p>Over the past few years, I've been making small (each is &lt;2KiB), <a href="https://github.com/binji/raw-wasm" target="_blank">hand-written demos in WebAssembly</a>. I've also written a few blog posts about the largest (see raw wasm: making a maze race, <a href="https://binji.github.io/posts/raw-wasm-making-a-maze-race/" target="_blank">part 1</a> and <a href="https://binji.github.io/posts/raw-wasm-making-a-maze-race-part-2/" target="_blank">part 2</a>). In this talk, I'll give an overview about the project, including how I made the demos, some of the fun tricks I used to keep file sizes small, and even how it can be useful!</p>
</div>

<div class="speaker-block">
  <h1>Bring your language to Wasm!</h1>
  <img src="assets/speaker-images/wvo.jpg"></img>
  <h2>Wouter van Oortmerssen</h2>
  <p>Wasm is an exciting technology for language designers: supporting a wider range of possible languages than previous "VMs", it allows a new language to run on equal footing with others, wherever Wasm runs. This talk provides an overview of the various options and tools that can help a language implementer bring their language to Wasm. It dives into the ways Wasm is different from other platforms, how this may affect different kinds of languages, and the different ways to put together existing tools, languages and intermediate formats to make that happen.</p>
</div>

<div class="speaker-block">
  <h1>Building a WebAssembly Runtime for BBC iPlayer and enhanced audience experiences</h1>
  <img class="speaker-image-contain" src="assets/speaker-images/bbc-logo.png"></img>
  <h2>Tim Pearce (& team), British Broadcasting Corporation</h2>
  <p>Join us on our journey into investigating the role of WebAssembly in delivering “Object-Based Media” experiences to BBC audiences on any device. We’ll demonstrate how we built our own WASM runtime, capable of playing back media based applications, by implementing and running BBC iPlayer as a WASM module!

We’ll show how we plan to build on this work, including leveraging compute nodes in the cloud, edge and home devices to improve the performance of real-time interactive and personalised media applications.</p>

</div>
