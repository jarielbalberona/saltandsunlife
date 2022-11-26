"use client";

import React from "react";
import "tw-elements";

export default function AboutUs() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-16 pb-16">
          <div>
            <div>
              <h1 className="text-2xl text-center font-bold tracking-tight sm:text-3xl">
                The people and inspiration behind
                <br />
                Salt & Sun Lifestyle
              </h1>
              <p className="mt-6 text-base  text-gray-600 text-center">
                Dumaguete is a city that has been a long-time favorite
                destination for divers and freedivers worldwide. It&apos;s known
                for its friendly people, beautiful beaches, and the fact that
                you can dive here year-round.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide   relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCrossfade"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div
            className="carousel-item active float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/0.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/1.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/2.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/3.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/4.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/5.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/6.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/7.jpg" className="block w-full" />
          </div>
          <div
            className="carousel-item float-left w-full"
            data-bs-interval="3000"
          >
            <img src="/assets/images/lawud/8.jpg" className="block w-full" />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-8 pb-12">
          <p className="mt-6 text-base text-gray-600 text-center">
            But when you&apos;re a freediver, you need more than just a good
            location—you need gear that can safely get you through your dives.
            The idea to create Salt & Sun Lifestyle came from our freediving
            friends from{" "}
            <a
              href="https://facebook.com/lawud.dgte"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Lawud</strong>
            </a>
            , who speak of how there&apos;s no local freediving shop in the
            city.
          </p>

          <p className="mt-6 text-base text-gray-600 text-center">
            And so we did it! We opened our online shop in July 2022 and
            haven&apos;t looked back since!
          </p>
          <p className="mt-6 text-base text-gray-600 text-center">
            By giving the freediving community in Dumaguete the tools they want
            at the most affordable pricing, we hope to satisfy their needs. We
            want to make it easier for the freedivers to get the gear they
            require, whether they&apos;re just starting or looking to improve.
          </p>
          <p className="mt-6 text-base text-gray-600 text-center">
            At Salt & Sun Lifestyle, we love what we do—and we hope you&apos;ll
            love it too!
          </p>
        </div>
      </div>
    </main>
  );
}
