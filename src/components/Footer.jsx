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
    <div className="w-full bg-[#ffbb00]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">€rypto.</h1>
          <p
            className="text-white py-4 font-semibold text-lg"
            variants={FadeIn}
            initial="hidden"
            animate="visible"
          >
            Stay connected: Follow us on social media for updates, contact us
            for inquiries, and explore more on our website.
          </p>
          <h2 className="text-sm">
            Developed and maintained by ©{" "}
            <a
              href="https://github.com/Nanashi-101"
              target="_main"
              className="hover:text-white  duration-300"
            >
              ~Nanashi_101
            </a>
          </h2>
          <div className="flex justify-between md:w-[75%] sm:gap-4 my-4">
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
        <motion.div className="flex justify-between lg:col-span-2">
          <div className="font-medium">
            <h6 className="font-bold text-white">Solutions</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Analytics
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Management
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Insights
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Commerce
              </li>
            </ul>
          </div>
          <div className="font-medium">
            <h6 className="font-bold text-white">Support</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Pricing
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Documentation
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Guides
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Assistance
              </li>
            </ul>
          </div>
          <div className="font-medium">
            <h6 className="font-bold text-white">Company</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                About
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Blogs
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Jobs
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Press
              </li>
            </ul>
          </div>
          <div className="font-medium">
            <h6 className="font-bold text-white">Legal</h6>
            <ul>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Claims
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Policy
              </li>
              <li className="py-2 text-sm cursor-pointer hover:text-white duration-300">
                Terms
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
