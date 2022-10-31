import React from "react";
import Link from "next/link";
import Head from "next/head";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>Thank you | Salt & Sun Lifestyle - Dive & Outdoor Gears</title>
      </Head>
      <section className="bg-white 0 h-screen">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Thank you for getting in touch!
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            We appreciate you contacting Salt & Sun Lifestyle. One of our
            colleagues will get back in touch with you soon! Have a great day!
            <br />
            <Link
              href="/"
              className=" mt-12 inline-flex text-white w-max bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center my-4"
            >
              Back to Home
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
