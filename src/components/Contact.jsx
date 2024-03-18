import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoReddit,
  BiPhone,
  BiLogoGmail,
  BiSolidMap,
} from "react-icons/bi";

const Contact = () => {
  return (
    <div className="w-full text-white px-4 py-16">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="contact-info flex flex-col">
          <h1 className="text-4xl text-[#ffbb00] font-bold py-2">Contact Us</h1>
          <p className="text-gray-300">
          "Get in touch today! Fill out the form below and let's start the conversation together."
          </p>
          <div className="address-section my-6">
            <p className="flex gap-2 text-gray-300">
              <BiPhone color="#ffbb00" size={20}/> - +48 793 243 658
            </p>
            <p className="flex gap-2 text-gray-300">
              <BiLogoGmail color="#ffbb00" size={20}/> - example.krypto@gmail.com
            </p>
            <p className="flex gap-2 text-gray-300">
              <BiSolidMap color="#ffbb00" size={20}/> - 32 street, North Carolina
            </p>
          </div>
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
        <div className="contact-form flex flex-col gap-4">
          <input className="text-white font-medium px-4 py-2 rounded-md bg-transparent border border-[#ffbb00]" type="text" placeholder="Your name" />
          <input className="text-white font-medium px-4 py-2 rounded-md bg-transparent border border-[#ffbb00]" type="email" placeholder="Your mail" />
          <textarea className="text-white font-medium px-4 py-2 rounded-md bg-transparent border border-[#ffbb00]" type="text" placeholder="Your message" />
          <button className=" w-[180px] md:text-sm sm:text-md text-lg my-2 mx-auto sm:ml-0  border border-[#ffbb00] bg-[#ffbb00] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider">
              Send message
            </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
