import img from "../../assets/Future-Banks-Summit-KSA-2023.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocation,
  faPhone,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer h-96 p-10  justify-evenly items-start content-center bg-[#222033] text-white relative">
      <nav className="font-oswald w-72">
        <h6 className="font-bold tracking-wide text-xl text-white">
          AN INITIATIVE OF
        </h6>
        <div>
          <img src={img} alt="" className="w-56" />
        </div>
        <a className="link link-hover text-lg">
          Digital Innovations Transforming The Kingdoms Banking Landscape
        </a>
      </nav>
      <nav className="font-oswald w-72">
        <h6 className="font-bold tracking-wide text-xl text-white">
          SOCIAL CONNECTION
        </h6>
        <a className="link link-hover text-lg">
          Don't miss a thing! Receive daily updates from Verve Management.
        </a>
        <div className="">
          <FontAwesomeIcon icon={faFacebook} className="py-4 mr-4" size="3x" />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="py-4 mr-4"
            size="3x"
          />
          <FontAwesomeIcon icon={faInstagram} className="py-4 mr-4" size="3x" />
          <FontAwesomeIcon icon={faTwitter} className="py-4 mr-4" size="3x" />
        </div>
      </nav>
      <nav className="font-oswald w-72">
        <h6 className="font-bold tracking-wide text-xl text-white">
          VERVE MANAGEMENT
        </h6>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faMapLocation} className=" mr-1" size="lg" />{" "}
          1702 & 1706, Mazaya Business Avenue BB2, Jumeirah Lakes Towers, Dubai,
          UAE
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faPhone} className=" mr-1" size="lg" /> +971 4
          243 4677/88
        </a>
        <a className="link link-hover">
          <FontAwesomeIcon icon={faMailBulk} className=" mr-1" size="lg" />
          info@verve-management.com
        </a>
      </nav>
   <div className="absolute p-4 bottom-0  left-0 right-0 w-9/12 border-t mx-auto border-slate-500 opacity-50">
        <p className="text-white font-roboto text-base  mx-auto ">© 2023 FUTURE BANKS SUMMIT | ALL RIGHTS RESERVED BY VERVE MANAGEMENT</p>
   </div>
    </footer>
  );
};
export default Footer;
