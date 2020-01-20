import App from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

// pages/_app.tsx
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap');
  html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    @media (max-width: 1280px) {
      font-size: 16px;
    }
  }
  body {
    margin: 0;
    background-color: hsl(237, 60%, 48%);
    background-image: url('/heightlines.svg');
/*     
    font-family: 'Open Sans', sans-serif;
    font-family: Arial, Helvetica, sans-serif;
 */    
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    appearance: none;
  }


  a {
    text-decoration: none;
    margin: 0;
    cursor: pointer;

    /* color: rgb(180, 180, 255); */
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color: white;
    }
  }

  @media only screen and (max-width: 767px) {

    h1 {
       font-size: 3em;
    }
 
    h2 {
       font-size: 2em;
    }
 
  }
 
`;

let count = 0;

export default class extends App {
  componentDidMount() {
    if (
      typeof window !== "undefined" &&
      typeof window.navigator !== "undefined"
    ) {
      if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
          navigator.serviceWorker.getRegistrations().then(registrations => {
            for (let registration of registrations) {
              registration.unregister().then(bool => {
                console.log("unregister: ", bool);
                ++count;
              });
            }
            if (count > 0) window.location.reload();
          });
        });
      }
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="description" content="WebAssembly Summit 2020" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="196x196"
            href="/favicon-196.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/favicon-196.png"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/apple-icon-167.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120.png"
          />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1668-2388.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2388-1668.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2048-2732.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2732-2048.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1668-2388.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2388-1668.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1668-2224.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2224-1668.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1536-2048.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2048-1536.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1242-2688.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2688-1242.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1125-2436.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2436-1125.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-828-1792.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1792-828.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1242-2208.png"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-2208-1242.png"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-750-1334.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1334-750.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-640-1136.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/apple-splash-1136-640.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />

          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="./favicon-196.png" />
          <meta name="theme-color" content="hsl(237, 60%, 48%)" />
          {
            // @ts-ignore
            this.props.styleTags
          }
        </Head>
        <GlobalStyles />
        <Component {...pageProps}></Component>
      </>
    );
  }
}
