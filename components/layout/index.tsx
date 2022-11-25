import { useEffect, useState, Fragment } from "react";
import SplashScreen from "components/splash-screen";
import { Transition } from "@headlessui/react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Transition
        appear={true}
        show={loading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="z-50 overflow-hidden"
      >
        <SplashScreen />
      </Transition>

      <Transition show={!loading}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Transition>
    </>
  );
};

export default Layout;
