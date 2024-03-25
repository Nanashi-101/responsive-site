import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { OpacityIn } from "../assets/motionVariants";


export default function Home() {
  return (
    <motion.div
    variants={OpacityIn}
    initial="hidden"
    animate="visible"
    >
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Features/>
      <Contact/>
      <Footer/>
    </motion.div>
  )
}
