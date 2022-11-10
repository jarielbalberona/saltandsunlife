"use client";
import React from "react";
import { PAGEURL } from "types/url";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as gtag from "utilities/google";

const collections = [
  {
    id: "collection_masks",
    name: "Diving mask with snorkel",
    description: "See clearly  underwater",
    image_src: "/assets/images/shop/fins/starter/duo-dive-white.jpeg",
    image_alt: "See clearly  underwater",
    href: PAGEURL.SHOP_MASKS,
  },
  {
    id: "collection_fins",
    name: "Freediving fins",
    description: "Take your performance to the next level",
    image_src: "/assets/images/shop/fins/starter/diane-white-trudive.jpeg",
    image_alt: "Take your performance to the next level",
    href: PAGEURL.SHOP_FINS,
  },
  {
    id: "collection_accesories",
    name: "Diving accessories",
    description: "Your diving essentials",
    image_src: "/assets/images/shop/accessories/buoy.jpeg",
    image_alt: "Your diving essentials",
    href: PAGEURL.SHOP_ACCESSORIES,
  },
];

export const Collections = () => {
  const router = useRouter();

  const onOpenCollection = (collection: any) => {
    router.push(collection.href);
    gtag.event({
      action: "select_item",
      parameters: {
        item_list_name: collection.name,
        items: [
          {
            item_id: collection.id,
            item_name: collection.name,
          },
        ],
      },
    });
  };

  return (
    <div id="collections" className=" text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-white">Collections</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {collections.map((collection) => (
              <div key={collection.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    layout="fill"
                    src={collection.image_src}
                    alt={collection.image_alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-white">
                  {/* <Link href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </Link> */}
                  <div
                    onClick={() => onOpenCollection(collection)}
                    className="cursor-pointer"
                  >
                    <span className="absolute inset-0" />
                    {collection.name}
                  </div>
                </h3>
                <p className="text-base font-semibold text-white">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
