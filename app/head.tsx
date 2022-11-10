export default async function Head() {
  return (
    <>
      <title>Salt & Sun Lifestyle - Dive & Outdoor Gears</title>
      <meta
        name="description"
        content="Feel more alive. Experience a thrill. Embrace the outdoor lifestyle. 🤿 x ⛰️"
      />
      <meta
        property="image"
        content="/assets/images/meta/default-og-image.jpg"
      />
      {/** Open Graph */}
      <meta
        property="og:title"
        content="Freediving Dumaguete - Salt & Sun Lifestyle"
      ></meta>
      <meta
        property="og:site_name"
        content="Salt & Sun Lifestyle - Dive & Outdoor Gears"
      ></meta>
      <meta property="og:url" content="https://www.saltandsun.life" />
      <meta
        property="og:image"
        content="/assets/images/meta/default-og-image.jpg"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Feel more alive. Experience a thrill. Embrace the outdoor lifestyle. 🤿 x ⛰️"
      />
      {/** End Open Graph */}
      <link rel="icon" href="/assets/images/meta/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </>
  );
}
