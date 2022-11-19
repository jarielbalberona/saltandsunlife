import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarked,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-blue-300 pb-6">
      <div className="mx-auto container pt-12  flex flex-col items-center justify-center">
        <div>
          <Link href={"/"}>
            <img
              className="block h-16 w-auto "
              src="/assets/images/logo-light.png"
              alt="Salt & Sun Lifestyle Logo"
            />
          </Link>
        </div>
        <div className="text-black flex flex-col items-center">
          <h1 className="text-2xl text-white font-cursive">
            Salt & Sun Lifestyle
          </h1>

          <div className="mt-6 mb-3 text-base text-white">
            <ul className="md:flex items-center text-center">
              <li className="md:mr-6 cursor-pointer pt-4 lg:py-0 ">
                <Link href="/">Home</Link>
              </li>
              <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 ">
                <Link href="/shop">Shop</Link>
              </li>
              <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 ">
                <Link href="/drop-us-a-line">Drop us a line</Link>
              </li>
              <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0 ">
                <Link href={"#"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap text-white justify-end gap-2 pr-4 mb-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/saltandsunlifestyle"
            >
              <FontAwesomeIcon icon={faFacebookF} className="px-2" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/saltandsunlifestyle"
            >
              <FontAwesomeIcon icon={faInstagram} className="px-2" />
            </a>
            <a href="mailto:hello@saltansun.life">
              <FontAwesomeIcon icon={faPaperPlane} className="px-2" />
            </a>
          </div>
          <div className="text-sm text-white mb-6 flex flex-col sm:flex-row text-center ">
            <div className="px-4 pt-2">
              <FontAwesomeIcon icon={faMapMarked} className="pr-1" /> Dumaguete
              City, 6200 Negros Oriental, Philippines
            </div>
            <div className="px-4 pt-2">
              <FontAwesomeIcon icon={faEnvelope} className="pr-1" />
              hello@saltansun.life
            </div>
          </div>
          <div className="text-sm text-white">
            <p> © Salt & Sun Lifestyle. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
