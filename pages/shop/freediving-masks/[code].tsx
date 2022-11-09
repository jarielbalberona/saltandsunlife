import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const FreedivingMasks = () => {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    console.log("code", code);
  }, [code]);

  return (
    <>
      <Head>
        <title>
          Freediving Masks | Salt & Sun Lifestyle - Dive & Outdoor Gears
        </title>
      </Head>
      <div className="h-screen">Freediving Masks</div>;
    </>
  );
};

export default FreedivingMasks;
