import React from "react";
import Link from "next/link";
import styles from "styles/splash.module.scss";

const FourOhhFour = () => {
  return (
    <div className="overflow-hidden">
      <div className={styles.splashScreenContainer}>
        <div className={styles.brandWavesContaienr}>
          <div className={styles.brandContainer}>
            <div className="mx-auto mt-12 max-w-screen-sm text-center px-4 ">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white ">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-white md:text-4xl">
                Something&apos;s missing.
              </p>
              <p className="mb-4 text-lg font-light text-white ">
                Sorry, we can&apos;t find that page. You&apos;ll find lots to
                explore on the home page.{" "}
              </p>
              <Link
                href="/"
                className="inline-flex text-white bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center my-4"
              >
                Back to Home
              </Link>
            </div>
          </div>
          <div className={styles.wavesContainer}>
            <svg
              className={styles.waves}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className={styles.parallax}>
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(42, 62, 87, 0.7)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(42, 62, 87, 0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(42, 62, 87, 0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#2a3e57" />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.undewater}>
          <div className={styles.water} />
          <div className={styles.uwPhotograph}>
            <img src="/assets/images/photographs/diane-mini.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourOhhFour;
