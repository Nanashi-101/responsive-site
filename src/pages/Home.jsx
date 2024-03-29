import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { OpacityIn } from "../assets/motionVariants";

export default function Home() {
  const [mob, setMob] = useState(false);
  const getMobileScreen = (value) => {
    setMob(value);
  };
  return (
    <motion.div variants={OpacityIn} initial="hidden" animate="visible">
      {/* {mob && <div className="bg-black max-w-[1240px]"/>} */}
      <Navbar MobileScreen={getMobileScreen} />
      <Hero />
      <Analytics />
      <Newsletter />
      <Features />
      <Contact />
      <Footer />
    </motion.div>
  );
}
