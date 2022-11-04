import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { scroller } from "react-scroll";

import * as gtag from "utilities/google";

const FindABuddy: NextPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Find a buddy - Dive & Outdoor Gears</title>
      </Head>

      <div className="home-page">
        <header className="bg-video relative flex items-center justify-center h-[75vh] overflow-hidden">
          <div className="container z-30 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left text-white">
              <h1 className="mt-4 text-4xl font-bold leading-tight font-cursive">
                Find a buddy
              </h1>
              <h2 className="mb-4 text-3xl leading-tight">Never dive alone</h2>
              <p className="leading-normal text-left text-sx mb-8 flex flex-col">
                <span>Hanap - Usap - Dive</span>
              </p>
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          >
            <source src="/assets/videos/find-a-buddy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
        <section className="relative z-50 w-full sm:-mt-56 -mt-36">
          <svg
            viewBox="0 0 1428 600"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
              </g>
              <g
                transform="translate(0, 173.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <rect
                  fill="#FFFFFF"
                  strokeWidth="0"
                  height="500"
                  width="100%"
                />
              </g>
            </g>
          </svg>
          <div className="absolute w-full  top-[60%]">
            <div className="w-full mb-4 text-center">
              <h3 className="text-2xl text-gray-800 font-bold leading-none mb-3">
                Freediving – truly a lifestyle
              </h3>
              <p className="text-gray-600 mb-8 px-4">
                alter how you think, care for your body, eat, prioritize, and in
                other ways
                <br />
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FindABuddy;
