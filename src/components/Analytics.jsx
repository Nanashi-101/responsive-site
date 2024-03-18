import React from "react";
import phone from "../assets/main_img.png";
import { FadeIn, FadeInReverse } from "../assets/motionVariants";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div className="w-full bg-[#ffbb00] py-16 px-4" id="about">
      <div className="mx-w-[1240px] mx-auto grid md:grid-cols-2">
        <motion.img className="w-[500px] mx-auto my-4" src={phone} alt="/" 
        variants={FadeIn}
        initial="hidden"
        animate="visible"
        />
        <motion.div className="flex flex-col justify-center"
        variants={FadeInReverse}
        initial="hidden"
        animate="visible"
        >
          <p className="uppercase text-white font-bold">
            ♦ Crypto analytics dashboard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Your Investments Centrally
          </h1>
          <p className="text-white font-normal text-md">
            Manage your crypto investments effortlessly with our intuitive
            platform. Track portfolios, analyze trends, and execute trades
            seamlessly. Stay informed with real-time updates and personalized
            insights. Your gateway to crypto success awaits.
          </p>
          <button className="text-black w-[180px] md:text-xl sm:text-lg text-md md:my-10 sm:my-8 my-6 border border-white bg-white py-2 text-center font-bold rounded-md transition-all hover:tracking-wider md:mx-0 mx-auto">Read more</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
