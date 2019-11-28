import App from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

// pages/_app.tsx
const GlobalStyles = createGlobalStyle`
  body {
    background-color: hsl(246, 55%, 47%);
/*     
    font-family: 'Open Sans', sans-serif;
    font-family: Arial, Helvetica, sans-serif;
 */    
    font-family: 'IBM Plex Sans', sans-serif;
    color: white;
    appearance: none;
  }

  h1, h2, h3, h4, h5, strong, b { 
    font-weight: 400; 
  } 

  h2 {
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
  }

  a {
    text-decoration: none;
  }
`;

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          {/* <title>WebAssembly Community</title> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="WebAssembly Summit 2020" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="../static/favicon.ico"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap"
            rel="stylesheet"
          />
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
