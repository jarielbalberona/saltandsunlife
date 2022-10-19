import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-full py-4 leading-tight  text-sm text-center text-white bg-blue-100">
      <div className="grid grid-cols-2 gap-2">
        <div className="text-left pl-4">© Copyright - Salt & Sun Lifestyle</div>
        <div className="flex flex-wrap justify-end gap-2 pr-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/saltandsunlifestyle"
            >
              <FontAwesomeIcon icon={faFacebookF} className="px-2" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://instagram.com/saltandsunlifestyle">
              <FontAwesomeIcon icon={faInstagram} className="px-2" />
            </a>
            <a href="mailto:hello@saltansun.life">
              <FontAwesomeIcon icon={faEnvelope} className="px-2" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Footer;
