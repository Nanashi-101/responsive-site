import { motion } from "framer-motion";
import React from "react";
import { FadeIn } from "../assets/motionVariants";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoReddit,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-[#ffbb00]">€rypto.</h1>
        <p
          className="text-white py-4 font-semibold text-lg"
          variants={FadeIn}
          initial="hidden"
          animate="visible"
        >
          Stay connected: Follow us on social media for updates, contact us for
          inquiries, and explore more on our website.
        </p>
        <h2 className="text-sm text-[#ffbb00]">
          Developed and maintained by ©{" "}
          <a
            href="https://github.com/Nanashi-101"
            target="_main"
            className="hover:text-white  duration-300"
          >
            ~Nanashi_101
          </a>
        </h2>
        <div className="flex md:w-[75%] sm:gap-4 gap-24 my-4 text-[#ffbb00]">
          <BiLogoFacebook
            size={30}
            className="hover:text-white hover:scale-105 transition-all cursor-pointer duration-300"
          />
          <BiLogoInstagram
            size={30}
            className="hover:text-white hover:scale-105 transition-all cursor-pointer duration-300"
          />
          <BiLogoTwitter
            size={30}
            className="hover:text-white hover:scale-105 transition-all cursor-pointer duration-300"
          />
          <BiLogoReddit
            size={30}
            className="hover:text-white hover:scale-105 transition-all cursor-pointer duration-300"
          />
        </div>
      </div>
      <motion.div className="flex justify-between lg:col-span-2 text-[#ffbb00]">
        <div className="font-medium">
          <h6 className="font-bold text-white">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Management</li>
            <li className="py-2 text-sm">Insights</li>
            <li className="py-2 text-sm">Commerce</li>
          </ul>
        </div>
        <div className="font-medium">
          <h6 className="font-bold text-white">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Assistance</li>
          </ul>
        </div>
        <div className="font-medium">
          <h6 className="font-bold text-white">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blogs</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
          </ul>
        </div>
        <div className="font-medium">
          <h6 className="font-bold text-white">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
