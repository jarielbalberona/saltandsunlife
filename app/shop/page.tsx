import React, { useEffect } from "react";
import Head from "next/head";
import Breadcrumb from "components/breadcrumb";

import Link from "next/link";
import { PAGEURL } from "types/url";
import { FILE_PATH } from "types/files";
import { getDiveGearItemByType, getDiveGearItemByCode } from "utilities/data";
import { shop_navigation_default } from "./constants";

export default async function Shop() {
  let fins = await getDiveGearItemByType("fins");
  let masks = await getDiveGearItemByType("mask");
  if (!masks.length) {
    masks = [];
  }
  if (!fins.length) {
    fins = [];
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="title-breadcrumb">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-2">
            Dive Shop
          </h1>
          <Breadcrumb items={shop_navigation_default} />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Ukiyo Masks - Mask with Snorkel
        </h2>
        <blockquote className="text-sm italic font-semibold text-gray-900 mt-4 flex items-center">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-400 mr-2"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p>
            [u-key-yo] Japanese (n.) &quot;The Floating World&quot;; Living in
            the moment, detached from the bothers of life.
          </p>
        </blockquote>
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {masks.map((mask: any) => (
            <div key={mask.id} className="group relative mb-5">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                <Link href={`${PAGEURL.SHOP_MASKS}/${mask.code}`}>
                  <img
                    src={`${FILE_PATH.SHOP_MASKS}/${mask.name
                      .toLowerCase()
                      .replace(/ /g, "-")}.jpg`}
                    alt={mask.description}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75 cursor-pointer"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-bold text-gray-700">
                    <Link href={`${PAGEURL.SHOP_MASKS}/${mask.code}`}>
                      <span aria-hidden="true" className="" />
                      {mask.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{mask.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {new Intl.NumberFormat("fil-PH", {
                    style: "currency",
                    currency: "PHP",
                  }).format(mask.price)}
                </p>
              </div>
              <div className="details mt-2 h-16 mb-4">
                <p className="text-sm text-gray-700">{mask.description}</p>
              </div>
              <div className="actions">
                <Link
                  href={`${PAGEURL.SHOP_MASKS}/${mask.code}`}
                  className="inline-block w-max rounded-full text-sm border border-transparent bg-blue-100 py-3 px-4 text-center font-medium text-white hover:bg-blue-300 cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Starter Fins
        </h2>
        <blockquote className="text-sm italic font-semibold text-gray-900 mt-4 flex items-center">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-400 mr-2"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p>Don`&apos;`t be afraid to take that first dive</p>
        </blockquote>
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fins.map((fin: any) => (
            <div key={fin.id} className="group relative mb-5">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200  lg:aspect-none lg:h-80">
                <Link href={`${PAGEURL.SHOP_FINS}/${fin.code}`}>
                  <img
                    src={`${FILE_PATH.SHOP_STARTER_FINS}/${fin.name
                      .toLowerCase()
                      .replace(/ /g, "-")}.jpg`}
                    alt={fin.description}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75 cursor-pointer"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-gray-700 font-bold">
                    <Link href={`${PAGEURL.SHOP_FINS}/${fin.code}`}>
                      <span aria-hidden="true" className="" />
                      {fin.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{fin.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {new Intl.NumberFormat("fil-PH", {
                    style: "currency",
                    currency: "PHP",
                  }).format(fin.price)}
                </p>
              </div>
              <div className="details mt-2 h-16 mb-4">
                <p className="text-sm text-gray-700">{fin.description}</p>
              </div>
              <div className="actions">
                <Link
                  href={`${PAGEURL.SHOP_MASKS}/${fin.code}`}
                  className="inline-block w-max rounded-full text-sm border border-transparent bg-blue-100 py-3 px-4 text-center font-medium text-white hover:bg-blue-300 cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 mb-12 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Bundle Offers
        </h2>
        <blockquote className="text-sm  text-gray-900 mt-4 flex items-center">
          <p>
            Taking both starter fins and ukiyo mask? We have a discount for you
            when you checkout!
          </p>
        </blockquote>
      </div>
    </div>
  );
}
