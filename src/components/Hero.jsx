import { FaBitcoin, FaEthereum } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import React from 'react'
import { OpacityIn } from "../assets/motionVariants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <motion.div className='text-white'
    variants={OpacityIn}
    initial="hidden"
    animate="visible"
    id="home"
    >
      <div className='max-w-[800px] mx-auto h-screen flex flex-col text-center justify-center items-center'>
        <p className="uppercase md:text-3xl sm:text-2xl text-md font-medium p-2">See your money grow!</p>
        <h1 className="uppercase text-1 md:py-4 text-[#e3b22b] font-extrabold">Invest in crypto</h1>
        <div className="flex items-center flex-wrap justify-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-medium p-[0.1rem]">Fast, Flexible financing for</p>
            <ReactTyped 
            className="md:text-4xl sm:text-3xl text-lg font-medium p-2 text-[#e3b22b]"
            strings={["Bitcoin", "Ethereum", "Tether", "USDT"]} 
            typeSpeed={100} 
            backSpeed={120} 
            loop/>
        </div>
        <div className="ctc-icons flex gap-1 mx-auto  text-[#e3b22b] mt-2 items-center">
            <FaBitcoin size={40}/>
            <FaEthereum size={40}/>
            <HiCurrencyDollar size={45}/>
        </div>
        <Link to='/any' className=" w-[180px] md:text-xl sm:text-lg text-md md:my-10 sm:my-8 my-6 border border-[#e3b22b] bg-[#e3b22b] py-2 text-center font-bold rounded-md transition-all
        hover:tracking-wider">Get Started</Link>
      </div>
    </motion.div>
  )
}

export default Hero
