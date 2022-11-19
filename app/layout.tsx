"use client";
import { useEffect, ReactNode } from "react";
import Script from "next/script";
// import { useRouter } from "next/router";
import "styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Merriweather, Montserrat, Rock_Salt } from "@next/font/google";
// import * as gtag from "utilities/google";

import Layout from "components/layout";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "300"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["200", "300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const rocksalt = Rock_Salt({
  variable: "--font-rock_salt",
  weight: ["400"],
  style: ["normal"],
  display: "swap",
});

function MyApp({ children }: { children: ReactNode }) {
  // const router = useRouter();

  // useEffect(() => {
  //   // Facebook Pixel
  //   import("react-facebook-pixel")
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init("1280530596113321"); // facebookPixelId
  //       ReactPixel.pageView();

  //       router.events.on("routeChangeComplete", () => {
  //         ReactPixel.pageView();
  //       });
  //     });

  //   // Google Tools
  //   const handleRouteChange = (url: string) => {
  //     gtag.pageViewGTM(url);
  //     gtag.pageViewGTAG(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   router.events.on("hashChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //     router.events.off("hashChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <html
      lang="en"
      className={[
        merriweather.variable,
        montserrat.variable,
        rocksalt.variable,
      ].join(" ")}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-WJ9MV97');
          `,
        }}
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CHCYYGSRQN`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CHCYYGSRQN', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-WJ9MV97`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

export default MyApp;
