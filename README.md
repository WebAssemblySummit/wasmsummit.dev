# [webassembly-summit.org](https://webassembly-summit.org)
> the landing page for WebAssembly Summit

[![Actions Status](https://github.com/webassemblysummit/webassembly-summit.org/workflows/Deploy%20production%20site/badge.svg)](https://github.com/webassemblysummit/webassembly-summit.org/actions)

WebAssembly Summit is a one day, single-track, conference for all things WebAssembly.

# Contributing

This projects is bundled and run using [Node.js](https://nodejs.org/), thus it must be installed on your system. To install the latest LTS version of Node.js (which includes npm). This can be done with nvm. (Mac and Linux: [here](https://github.com/creationix/nvm), Windows: [here](https://github.com/coreybutler/nvm-windows)).

Contributions should start by [opening an issue](https://github.com/WebAssemblySummit/webassembly-summit.org/issues) and describing what you would like to accomplish. UI features may require a design or mock-up of what you are thinking of implementing. Once consensus or approval of the taks has been given, feel free to start cading, and open a PR!

## Building & Running the project

1. Ensure that [Node.js](https://nodejs.org/) (install instructions above), and [yarn](https://yarnpkg.com/lang/en/docs/install) are installed on your system.
2. Enter the project directory, and install the project dependencies by running: `yarn`.
3. Run a development server with `yarn run dev`.

For building the project, you can run `yarn run build`, and serving the project you can run `yarn run start`.
