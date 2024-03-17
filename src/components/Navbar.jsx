import React, { useState } from "react";
import { BiMenu, BiCodeAlt, BiExit } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1260px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl text-[#ffbb00] font-bold">Krypto.</h1>
      <ul className="hidden md:flex items-center">
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
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={30} /> : <BiMenu size={30} />}
      </div>
      <div className={!nav?"fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500":"fixed left-[-100%] ease-in duration-500"}>
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
      </div>
    </div>
  );
};

export default Navbar;
