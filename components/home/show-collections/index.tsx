"use client";

import React from "react";
import { scroller } from "react-scroll";
import * as gtag from "utilities/google";

const show_products = [
  [
    {
      id: 1,
      src: "/assets/images/shop/fins/starter/black-crappie.jpg",
      alt: "Starter fins",
    },
    {
      id: 2,
      src: "/assets/images/shop/masks/mackerel.jpg",
      alt: "Mask with snorkel",
    },
  ],
  [
    {
      id: 3,
      src: "/assets/images/shop/masks/threadfin.jpg",
      alt: "Starter fins",
    },
    {
      id: 4,
      src: "/assets/images/shop/fins/starter/diane-white-trudive.jpeg",
      alt: "Starter fins",
    },
    {
      id: 5,
      src: "/assets/images/shop/fins/starter/frost-white.jpg",
      alt: "Starter fins",
    },
  ],
  [
    {
      id: 6,
      src: "/assets/images/shop/fins/starter/frost-black.jpg",
      alt: "Starter fins",
    },
    {
      id: 7,
      src: "/assets/images/shop/masks/jacks.jpg",
      alt: "Starter fins",
    },
  ],
];

export default function ShowCollections() {
  const onClickNavigate = () => {
    gtag.event({
      action: "view_item_list",
      parameters: {
        item_list_id: "collections",
        item_list_name: "Collections",
      },
    });

    scroller.scrollTo("collections", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="bg-white -mt-1 pb-24 pt-44">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 bg-white mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8  pt-16">
        <div className="container flex flex-col justify-center">
          <div className="h-full flex flex-col justify-center mb-12">
            <h3 className="text-xl text-gray-800 lg:text-left text-center font-bold  mb-3">
              At Salt & Sun Lifestyle, we don&apos;t just sell you equipment for
              freediving—we help you live it.
            </h3>
            <p className="text-gray-600 mb-8 lg:text-left text-sm lg:text-base text-center">
              At our core, we&apos;re all about helping people find joy in the
              outdoors. As we expand, we intend to provide more hiking and
              camping tools so you may fully enjoy nature on your next trip. So
              stay tuned for updates on all of our newest products and deals!
            </p>
            <a
              onClick={onClickNavigate}
              className="inline-block w-max rounded-full border border-transparent bg-blue-500 py-3 px-8 text-center font-medium text-white hover:bg-blue-300 cursor-pointer"
            >
              Browse Collections
            </a>
          </div>
          <div className="h-full"></div>
        </div>
        <div>
          <div className="overflow-hidden flex items-center space-x-6 lg:space-x-8">
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              {show_products[0].map((product) => (
                <div
                  key={product.id}
                  className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>

            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              {show_products[1].map((product) => (
                <div
                  key={product.id}
                  className="h-64 w-44 overflow-hidden rounded-lg"
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              {show_products[2].map((product) => (
                <div
                  key={product.id}
                  className="h-64 w-44 overflow-hidden rounded-lg"
                >
                  <img
                    src={product.src}
                    alt={product.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
