import React from "react";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>
          Drop us a line | Salt & Sun Lifestyle - Dive & Outdoor Gears
        </title>
      </Head>
      <section className="bg-white 0 min-h-screen">
        <div className="flex flex-row">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              We&apos;d love to hear from you
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
              Need something? <br /> Our door is always open for a good cup of
              coffee.
            </p>
            <form
              action="https://formsubmit.co/1ba696cacd7d4c44e17c88e4d8ddef35"
              className="space-y-8"
              target="_blank"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="Juan"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Please specifiy..."
                ></textarea>
              </div>
              <input
                type="hidden"
                name="_next"
                value="https://www.saltandsun.life/thank-you"
              ></input>
              <input
                type="hidden"
                name="_subject"
                value="Salt & Sun Lifestyle - Contact Us"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="hidden"
                name="_autoresponse"
                value="We appreciate you contacting Salt & Sun Lifestyle. One of our
            colleagues will get back in touch with you soon! Have a great day!"
              ></input>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center bg-blue-400  text-white rounded-full bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
