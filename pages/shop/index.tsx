import React from "react";
import Head from "next/head";
import Link from "next/link";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Shop | Salt & Sun Lifestyle - Diving & Outdoor Gears</title>
      </Head>
      <div className="h-screen">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-blue-600 font-black leading-7 md:leading-10">
              Our online shop is under maintenance.
            </h1>
            <img
              className="block w-auto h-60 rounded mt-6"
              src="/assets/images/turtle-bubbles.png"
              alt="Turtle sleeping"
            />
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              Time to chillax, please check back soon.
            </p>
            <Link
              href="/"
              className=" mt-12 inline-flex text-white w-max bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
