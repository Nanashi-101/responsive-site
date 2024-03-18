import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
