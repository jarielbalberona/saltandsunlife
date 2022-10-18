import React from "react";
import styles from "styles/splash.module.scss";

const SplashScreen = () => {
  return (
    <div className={styles.splashScreenContainer}>
      <div className={styles.brandWavesContaienr}>
        <div className={styles.brandContainer}>
          <div className={styles.brand}>
            <img
              className="block h-20 w-auto"
              src="/assets/logo-light.png"
              alt="Salt & Sun Lifestyle Logo"
            />
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
          <img src="/assets/photographs/diane-mini.jpg" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
