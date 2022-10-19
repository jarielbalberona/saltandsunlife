import { useState, useEffect } from "react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Salt & Sun Lifestyle - Diving & Outdoor Gears</title>
        <meta name="description" content="Bringing you quality gears" />
        <link rel="icon" href="/assets/meta/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;1,300;1,400&family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;1,300;1,400&family=Rock+Salt&display=swap" rel="stylesheet"></link>


      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
