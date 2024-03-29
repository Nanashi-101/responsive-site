import React, { useEffect, useState } from "react";
import {
  BiMenu,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoReddit,
} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
// import { FadeIn, FadeInReverse } from "../assets/motionVariants";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = ({ MobileScreen }) => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = !nav ? "hidden" : "auto";
    // bodyStyle.pointerEvents = !nav ? "none" : "auto";
    MobileScreen(nav);
    // if(window.innerWidth > 768){
    //   setNav(false)
    // }
  }, [nav]);

  return (
    <div className="w-full fixed bg-black z-20">
      <div className="flex justify-between items-center h-24 mx-auto max-w-[1260px] px-4 text-white">
        <motion.h1 className="w-full text-4xl text-[#ffbb00] font-bold">
          €rypto.
        </motion.h1>
        <motion.ul className="hidden md:flex items-center">
          <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
            <Link to="home" offset={-100} duration={300}>
              Home
            </Link>
          </li>
          <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
            <Link to="company" offset={170} duration={300}>
              Company
            </Link>
          </li>
          <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
            <Link to="resources" offset={-250} duration={300}>
              Resources
            </Link>
          </li>
          <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
            <Link to="about" offset={-150} duration={300}>
              About
            </Link>
          </li>
          <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
            <Link to="contact" offset={-220} duration={300}>
              Contact
            </Link>
          </li>
        </motion.ul>
        <motion.div className="hidden md:flex md:flex-col ml-6 border-l border-l-[#ffbb00]">
          <p className="text-sm ml-2 font-thin text-[#ffbb00]">Find us on :</p>
          <div className="flex gap-2">
            <BiLogoFacebook
              size={30}
              className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
            />
            <BiLogoInstagram
              size={30}
              className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
            />
            <BiLogoTwitter
              size={30}
              className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
            />
            <BiLogoReddit
              size={30}
              className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
            />
          </div>
        </motion.div>
        <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer hover:text-[#ffbb00] duration-300"
          >
            {nav && <BiMenu size={35} />}
        </div>
        <div
          className={
            !nav && window.innerWidth < 768
              ? "fixed left-0 top-0 w-[70%] h-[100vh] border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500 z-20 overflow-hidden"
              : "fixed left-[-100%] ease-in duration-500"
          }
        >
          <div
            onClick={handleNav}
            className="flex md:hidden cursor-pointer h[100vh] overflow-hidden items-center"
          >
            <h1 className="w-full text-3xl text-[#ffbb00] font-bold m-3">
              €rypto.
            </h1>
            <AiOutlineClose size={35} className="mr-[20px] mt-2 hover:text-[#ffbb00] duration-300"/>
          </div>
          <ul className="uppercase">
            <li className="p-3 hover:text-[#ffbb00] transition-all cursor-pointer text-lg font-semibold">
              <Link to="home" offset={-100} duration={300}>
                Home
              </Link>
            </li>
            <li className="p-3 hover:text-[#ffbb00] transition-all cursor-pointer text-lg font-semibold">
              <Link to="company" offset={170} duration={300}>
                Company
              </Link>
            </li>
            <li className="p-3 hover:text-[#ffbb00] transition-all cursor-pointer text-lg font-semibold">
              <Link to="resources" offset={-250} duration={300}>
                Resources
              </Link>
            </li>
            <li className="p-3 hover:text-[#ffbb00] transition-all cursor-pointer text-lg font-semibold">
              <Link to="about" offset={-150} duration={300}>
                About
              </Link>
            </li>
            <li className="p-3 hover:text-[#ffbb00] transition-all cursor-pointer text-lg font-semibold">
              <Link to="contact" offset={-220} duration={300}>
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-full flex flex-col items-center gap-2 mt-8 text-center mx-auto justify-center">
            <p className="text-sm ml-2 font-thin text-[#ffbb00]">
              Find us on :
            </p>
            <div className="flex gap-5">
              <BiLogoFacebook
                size={30}
                className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
              />
              <BiLogoInstagram
                size={30}
                className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
              />
              <BiLogoTwitter
                size={30}
                className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
              />
              <BiLogoReddit
                size={30}
                className="hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
