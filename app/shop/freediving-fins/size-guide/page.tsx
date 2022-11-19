import React, { useEffect } from "react";
import Head from "next/head";
import Breadcrumb from "components/breadcrumb";
import Link from "next/link";
import { PAGEURL } from "types/url";
import { FILE_PATH } from "types/files";
import { shop_navigation_fins } from "../../constants";
import { getDiveGearItemByType } from "utilities/data";

const sizes = [
  {
    name: "XS",
    eu: "33-35",
    us: "1.5 - 2",
    mm: "195",
    in: "7.6",
  },
  {
    name: "S",
    eu: "36-38",
    us: "2.5 - 4",
    mm: "215",
    in: 8.46,
  },
  {
    name: "M",
    eu: "39-40",
    us: "4.5 - 5.5",
    mm: "235",
    in: 9.25,
  },
  {
    name: "L",
    eu: "41-42",
    us: "6 - 7",
    mm: "255",
    in: 10.03,
  },
  {
    name: "XL",
    eu: "43-44",
    us: "7.5 - 8.5",
    mm: "270",
    in: 10.63,
  },
];

export default async function Shop() {
  return (
    <div className="bg-white h-screen">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="title-breadcrumb">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 pb-2">
            Salt & Sun Lifestyle Starter Fins
          </h1>
          <Breadcrumb
            items={[
              ...shop_navigation_fins,
              {
                name: "Size guide",
                link: PAGEURL.SHOP_FINS_SiZE_GUIDE,
              },
            ]}
          />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-2 sm:py-4 sm:px-4 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          Size Conversion Chart
        </h2>
      </div>
      <div className="mx-auto max-w-2xl px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 mt-4">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-center font-bold text-gray-900 px-6 py-4 "
                      ></th>
                      <th
                        scope="col"
                        className="text-center font-medium text-gray-900 px-6 py-4 "
                      >
                        EU
                      </th>
                      <th
                        scope="col"
                        className="text-center font-medium text-gray-900 px-6 py-4 "
                      >
                        US
                      </th>
                      <th
                        scope="col"
                        className="text-center font-medium text-gray-900 px-6 py-4 "
                      >
                        Foot Length (mm)
                      </th>
                      <th
                        scope="col"
                        className="text-center font-medium text-gray-900 px-6 py-4"
                      >
                        Foot Length (in)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((size, key) => (
                      <tr key={key} className="border-b">
                        <td className="px-6 text-center py-4 whitespace-nowrap font-bold text-gray-900 ">
                          {size.name}
                        </td>
                        <td className="text-center  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {size.eu}
                        </td>
                        <td className="text-center  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {size.us}
                        </td>
                        <td className="text-center  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {size.mm}
                        </td>
                        <td className="text-center  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {size.in}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
