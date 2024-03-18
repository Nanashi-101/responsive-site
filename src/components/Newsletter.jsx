import React from "react";
import {motion} from 'framer-motion'
import { FadeIn, FadeInReverse } from "../assets/motionVariants";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <motion.div className="lg:col-span-2 my-5 "
        variants={FadeIn}
        initial="hidden"
        animate="visible"
        >
          <h1 className="text-4 text-[#ffbb00] font-bold py-2">
            Want tips & tricks to manage your money?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </motion.div>
        <motion.div className="my-4"
        variants={FadeInReverse}
        initial="hidden"
        animate="visible"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full my-2 sm:my-0">
            <input
              className="w-full p-3 rounded-md text-black "
              type="email"
              placeholder="Enter your mail here"
            />
            <button className=" w-[180px] md:text-sm sm:text-md text-lg my-4 mx-auto sm:ml-4 border border-[#ffbb00] bg-[#ffbb00] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider">
              Notify us
            </button>
          </div>
          <p className="my-1">
            We care about the protection of your data. Read our
            <span className="text-[#ffbb00] underline ml-1">Privacy policy</span>.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
