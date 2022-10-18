import { Fragment, useState } from "react";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const NotificationsProfileContainer = () => {
  const [auth] = useState(null);
  if (!auth) return <></>;
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-blue-400 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600"
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full bg-blue-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-600">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
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
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-blue-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-blue-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-blue-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

const Navbar = () => {
  const [active_navigation, setActiveNavigation] = useState(0);
  const [navigation] = useState([
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Contact Us", href: "/contact-us" },
  ]);

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
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="/assets/logo-light.png"
                    alt="Salt & Sun Lifestyle Logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/assets/logo-light.png"
                    alt="Salt & Sun Lifestyle Logo"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item: any, index: number) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          onClick={() => setActiveNavigation(index)}
                          className={classNames(
                            index === active_navigation
                              ? "bg-blue-400 text-white"
                              : "text-gray-300 hover:bg-blue-400 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={
                            index === active_navigation ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}

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
                  {navigation.map((item: any, index: number) => (
                    <Disclosure.Button as="a" key={item.name}>
                      <Link key={item.name} href={item.href}>
                        <a
                          onClick={() => {
                            close();
                            setActiveNavigation(index);
                          }}
                          className={classNames(
                            index === active_navigation
                              ? "bg-blue-400 text-white"
                              : "text-gray-300 hover:bg-blue-400 hover:text-white",
                            "block px-3 py-2 rounded-md text-base font-medium w-auto"
                          )}
                          aria-current={
                            index === active_navigation ? "page" : undefined
                          }
                        >
                          {item.name}
                        </a>
                      </Link>
                    </Disclosure.Button>
                  ))}
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
