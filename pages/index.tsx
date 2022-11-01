import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { scroller } from "react-scroll";
import { PAGEURL } from "types/url";
import Modal from "components/modal";
import * as gtag from "utilities/google";
import "../styles/home.module.scss";

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);

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
      name: "Freediving Fins",
      description: "Take your performance to the next level",
      image_src: "/assets/images/shop/fins/starter/diane-white-trudive.jpeg",
      image_alt: "Take your performance to the next level",
      href: PAGEURL.SHOP_FINS,
    },
    {
      id: "collection_accesories",
      name: "Diving Accessories",
      description: "Your diving essentials",
      image_src: "/assets/images/shop/accessories/buoy.jpeg",
      image_alt: "Your diving essentials",
      href: PAGEURL.SHOP_ACCESSORIES,
    },
  ];

  const onClickNavigate = () => {
    gtag.event({
      action: "view_item_list",
      parameters: {
        item_list_id: "collections",
        item_list_name: "Collections",
        items: collections.map((item) => ({
          item_id: item.id,
          item_name: item.name,
        })),
      },
    });

    scroller.scrollTo("collections", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const onOpenCollection = (collection: any) => {
    setOpen(true);
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

  const show_products = [
    [
      {
        id: 1,
        src: "/assets/images/shop/fins/starter/black.jpg",
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
        src: "/assets/images/shop/fins/starter/ebony-white-cross.jpg",
        alt: "Starter fins",
      },
    ],
    [
      {
        id: 6,
        src: "/assets/images/shop/fins/starter/frost-black-cross.jpg",
        alt: "Starter fins",
      },
      {
        id: 7,
        src: "/assets/images/shop/masks/jacks.jpg",
        alt: "Starter fins",
      },
    ],
  ];
  return (
    <>
      <Head>
        <title>Salt & Sun Lifestyle - Dive & Outdoor Gears</title>
      </Head>

      <div className="home-page">
        <header className="bg-video relative flex items-center justify-center h-[75vh] overflow-hidden">
          <div className="container z-30 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left text-white">
              <h1 className="mt-4 text-4xl font-bold leading-tight font-cursive">
                Salt & Sun
              </h1>
              <h2 className="mb-4 text-3xl leading-tight">Lifestyle</h2>
              <p className="leading-normal text-left text-sx mb-8 flex flex-col">
                <span>Feel more alive. Experience a thrill. </span>
                <span>Embrace the outdoor lifestyle. 🤿 x ⛰️</span>
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

        <div className="bg-white -mt-1 py-24">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2 bg-white mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8  pt-16">
            <div className="container flex flex-col justify-center">
              <div className="h-full  flex flex-col justify-center mb-12">
                <h3 className="text-2xl text-gray-800 font-bold leading-none mb-3">
                  Stocks just arrived!
                </h3>
                <p className="text-gray-600 mb-8">
                  Our diving gears are back in stock! Grab yours before it’s
                  gone again! Come by our store today or shop online.
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
        <div id="collections" className=" text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-white">Collections</h2>
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {collections.map((collection) => (
                  <div key={collection.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <img
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
        <hr className="mx-auto w-1/2 " />
        <section className="">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <figure className="max-w-screen-md mx-auto">
              <svg
                className="h-12 mx-auto mb-3 text-gray-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <blockquote>
                <p className="text-2xl font-medium text-white">
                  &quot;Nearly contains everything you need for diving and
                  outdoor accessories&quot;
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <img
                  className="w-6 h-6 rounded-full"
                  src="/assets/images/shop/shark.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 divide-gray-50">
                  <div className="pr-3 font-medium text-white">Marie</div>
                  <div className="pl-3 text-sm font-light text-gray-50">
                    Freediver
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
      <Modal open={open} setOpen={setOpen} />
    </>
  );
};

export default Home;
