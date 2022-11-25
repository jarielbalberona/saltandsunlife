"use client";

import React from "react";
import "tw-elements";

export default function AboutUs() {
  return (
    <div>
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
      <div className="w-full  mt-12">
        <div className="w-full mb-4 text-center">
          <h3 className="text-xl lg:text-2xl text-gray-800 font-bold leading-none mb-2">
            About Us
          </h3>
          <p className="text-gray-600 mb-8 px-4 lg:w-1/2 mx-auto mt-4 text-sm lg:text-base">
            Dumaguete is a city that has been a long-time favorite destination
            for divers and freedivers worldwide. It&apos;s known for its
            friendly people, beautiful beaches, and the fact that you can dive
            here year-round.
          </p>
          <p className="text-gray-600 mb-8 px-4 lg:w-1/2 mx-auto mt-4 text-sm lg:text-base">
            But when you&apos;re a freediver, you need more than just a good
            location—you need gear that can safely get you through your dives.
          </p>
          <p className="text-gray-600 mb-8 px-4 lg:w-1/2 mx-auto mt-4 text-sm lg:text-base">
            The idea to create Salt & Sun Lifestyle came from our freediving
            friends from <strong>Lawud</strong>, who speak of how there&apos;s
            no local freediving shop in the city.
          </p>
          <p className="text-gray-600 mb-8 px-4 lg:w-1/2 mx-auto mt-4 text-sm lg:text-base">
            And so we did it! We opened our online shop in July 2022 and
            haven&apos;t looked back since!
          </p>
          <p className="text-gray-600 mb-8 px-4 lg:w-1/2 mx-auto mt-4 text-sm lg:text-base">
            By giving the freediving community in Dumaguete the tools they want
            at the most affordable pricing, we hope to satisfy their needs. We
            want to make it easier for the freedivers to get the gear they
            require, whether they&apos;re just starting or looking to improve.
          </p>
          <p className="text-gray-600 mb-8 px-4 lg:w-1/2 mx-auto mt-4 text-sm lg:text-base">
            At Salt & Sun Lifestyle, we love what we do—and we hope you&apos;ll
            love it too!
          </p>
        </div>
      </div>
    </div>
  );
}
