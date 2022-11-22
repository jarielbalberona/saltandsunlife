// "use client";

import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAnchor, faHome, faStore } from "@fortawesome/free-solid-svg-icons";

const explore_fd_items = [
  {
    name: "Find a buddy",
    href: "/find-a-buddy",
  },
  {
    name: "Where to next?",
    href: "/where-to-next",
  },
  {
    name: "Get Certified",
    href: "/get-certified",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navigation] = useState([
    {
      id: 1,
      name: "Home",
      icon: <FontAwesomeIcon icon={faHome} className="pr-2" />,
      href: "/",
    },
    {
      id: 2,
      name: "Shop",
      icon: <FontAwesomeIcon icon={faStore} className="pr-2" />,
      href: "/shop",
    },
    {
      id: 3,
      name: "Drop us a line",
      icon: <FontAwesomeIcon icon={faAnchor} className="pr-2" />,
      href: "/drop-us-a-line",
    },
  ]);
  // const [navigation] = useState([
  //   { name: "Home", href: "/" },
  //   { name: "Shop", href: "/shop" },
  //   { name: "Explore Freediving", href: "#" },
  //   { name: "About Us", href: "/about-us" },
  //   { name: "Contact Us", href: "drop-us-a-line" },
  // ]);

  const setClose = () => {
    setOpen(false);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6 mb-2 lg:mb-0">
        <Link href={"/"} onClick={setClose}>
          <img
            className="block h-8 w-auto"
            src="/assets/images/logo-light.png"
            alt="Salt & Sun Lifestyle Logo"
          />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center px-3 py-2 border rounded text-white border-blue-300 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto  ${
          !open ? "hidden" : ""
        }`}
      >
        <div className="text-sm lg:flex-grow lg:justify-end lg:flex">
          {navigation.map((nav: any) => (
            <Link
              key={nav.id}
              href={nav.href}
              className="block mt-2 lg:inline-block lg:mt-0 text-white hover:bg-blue-500 lg:mx-1 p-2 px-3 rounded-full"
              onClick={setClose}
            >
              {nav.icon} {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
