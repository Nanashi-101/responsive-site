import React, { useState } from "react";
import {
  BiMenu,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoReddit,
} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { FadeIn, FadeInReverse } from "../assets/motionVariants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-evenly items-center h-24 max-w-[1260px] mx-auto px-4 text-white">
      <motion.h1
        className="w-full text-4xl text-[#ffbb00] font-bold"
        variants={FadeIn}
        initial="hidden"
        animate="visible"
      >
        €rypto.
      </motion.h1>
      <motion.ul
        className="hidden md:flex items-center"
        variants={FadeInReverse}
        initial="hidden"
        animate="visible"
      >
        <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
          Home
        </li>
        <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
          Company
        </li>
        <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
          Resources
        </li>
        <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
          About
        </li>
        <li className="p-3 hover:text-[#ffbb00] hover:scale-110 transition-all cursor-pointer text-lg font-semibold">
          Contact
        </li>
      </motion.ul>
      <motion.div
        className="hidden md:flex md:flex-col ml-6 border-l border-l-[#ffbb00]"
        variants={FadeInReverse}
        initial="hidden"
        animate="visible"
      >
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
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <BiMenu size={30} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] ease-in duration-500"
        }
      >
        <h1 className="w-full text-3xl text-[#ffbb00] font-bold m-3">
          Krypto.
        </h1>
        <ul className="uppercase">
          <li
            className="p-3 hover:text-[#ffbb00]
          border-b border-b-gray-900 transition-all cursor-pointer text-md font-semibold"
          >
            Home
          </li>
          <li
            className="p-3 hover:text-[#ffbb00]
          border-b border-b-gray-900 transition-all cursor-pointer text-md font-semibold"
          >
            Company
          </li>
          <li
            className="p-3 hover:text-[#ffbb00]
          border-b border-b-gray-900 transition-all cursor-pointer text-md font-semibold"
          >
            Resources
          </li>
          <li
            className="p-3 hover:text-[#ffbb00]
          border-b border-b-gray-900 transition-all cursor-pointer text-md font-semibold"
          >
            About
          </li>
          <li
            className="p-3 hover:text-[#ffbb00]
          border-b border-b-gray-900 transition-all cursor-pointer text-lg font-semibold"
          >
            Contact
          </li>
        </ul>
        <div className="w-full flex flex-col items-center gap-2 mt-8 text-center mx-auto justify-center">
          <p className="text-sm ml-2 font-thin text-[#ffbb00]">Find us on :</p>
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
  );
};

export default Navbar;
