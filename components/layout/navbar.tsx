import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
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

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

type MenuDPNavItemsProps = {
  item: any;
  is_active?: boolean;
  className?: string;
  onClick?: () => void;
};

const MenuDropdown = ({
  item,
  is_active = false,
  onClick = () => null,
}: MenuDPNavItemsProps) => {
  const [items, setItems] = useState<Array<{ name: string; href: string }>>([]);

  useEffect(() => {
    if (item === "profile") {
      setItems([
        {
          name: "Your Profile",
          href: "/profile",
        },
        {
          name: "Settings",
          href: "/settings",
        },
        {
          name: "Sign out",
          href: "#",
        },
      ]);
    } else {
      setItems(explore_fd_items);
    }
  }, [item]);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button
          className={`flex text-sm ${
            item === "profile" ? "rounded-full" : "rounded-md"
          }`}
        >
          <span className="sr-only">Open user menu</span>

          {item === "profile" ? (
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          ) : (
            <a
              className={` px-3 py-2 text-sm ${
                is_active
                  ? "border-b text-white"
                  : "text-gray-300 hover:bg-blue-400 hover:text-white hover:rounded-md"
              }`}
              aria-current={true ? "page" : undefined}
            >
              Explore Freedive
            </a>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {items.map((item: any) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  onClick={onClick}
                  href={item.href}
                  className={classNames(
                    active ? "bg-slate-200" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const NavItem = ({
  item,
  is_active,
  className = "",
  onClick,
}: MenuDPNavItemsProps) => {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={classNames(
        is_active
          ? "border-b text-white"
          : "text-gray-300 hover:bg-blue-400 hover:text-white hover:rounded-md",
        className,
        "px-3 py-2 text-sm "
      )}
      aria-current={is_active ? "page" : undefined}
    >
      {item.icon}
      {item.name}
    </Link>
  );
};

const NotificationsProfileContainer = () => {
  const [auth] = useState(null);
  if (!auth) return <></>;
  return (
    <>
      <button
        type="button"
        className="rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <MenuDropdown item="profile" />
    </>
  );
};

const Navbar = () => {
  const [active_navigation, setActiveNavigation] = useState(0);
  const [navigation] = useState([
    {
      name: "Home",
      icon: <FontAwesomeIcon icon={faHome} className="pr-2" />,
      href: "/",
    },
    {
      name: "Shop",
      icon: <FontAwesomeIcon icon={faStore} className="pr-2" />,
      href: "/shop",
    },
    {
      name: "Explore Freediving",
      icon: <FontAwesomeIcon icon={faAnchor} className="pr-2" />,
      href: "#",
    },
    {
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

  return (
    <Disclosure as="nav" className="bg-blue-500">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href={"/"}>
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="/assets/images/logo-light.png"
                      alt="Salt & Sun Lifestyle Logo"
                    />
                  </Link>

                  <Link href={"/"}>
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src="/assets/images/logo-light.png"
                      alt="Salt & Sun Lifestyle Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item: any, index: number) => {
                      if (index === 2) {
                        return <></>;
                        // return (
                        //   <MenuDropdown
                        //     key={item.name}
                        //     item="explore"
                        //     is_active={index === active_navigation}
                        //     onClick={() => {
                        //       setActiveNavigation(index);
                        //     }}
                        //   />
                        // );
                      } else {
                        return (
                          <NavItem
                            key={item.name}
                            item={item}
                            is_active={index === active_navigation}
                            onClick={() => {
                              setActiveNavigation(index);
                            }}
                          />
                        );
                      }
                    })}

                    <NotificationsProfileContainer />
                  </div>
                </div>
                <div className="sm:hidden flex space-x-4">
                  <NotificationsProfileContainer />
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              {({ close }) => (
                <div className="space-y-1 px-2 pt-2 pb-3 absolute left-0 z-20 block bg-blue-500 w-screen">
                  {navigation.map((item: any, index: number) => {
                    if (index === 2) {
                      return (
                        <>
                          {/* {explore_fd_items.map((item, fd_index) => (
                            <NavItem
                              key={item.name}
                              item={item}
                              is_active={
                                Number(`${index}${fd_index}`) ===
                                active_navigation
                              }
                              onClick={() => {
                                close();
                                setActiveNavigation(
                                  Number(`${index}${fd_index}`)
                                );
                              }}
                              className="block px-3 py-2 text-base font-medium w-auto"
                            />
                          ))} */}
                        </>
                      );
                    } else {
                      return (
                        <NavItem
                          key={item.name}
                          item={item}
                          is_active={index === active_navigation}
                          onClick={() => {
                            close();
                            setActiveNavigation(index);
                          }}
                          className="block px-3 py-2 text-base font-medium w-auto"
                        />
                      );
                    }
                  })}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
