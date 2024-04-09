import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
// import { FadeIn, FadeInReverse } from "../assets/motionVariants";
import { BiLinkExternal } from "react-icons/bi";

const Newsletter = () => {
  const [mail, setMail] = useState("");
  const templateParams = {
    reply_to: mail,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(`service_ai4plf9`, `template_newsletter-001`, templateParams, {
        publicKey: `OYR1pBahHM4QPyouF`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMail("");
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full py-16 text-white px-4" id="resources">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <motion.div
          className="lg:col-span-2 my-5 "
        >
          <h1 className="text-4 text-[#e3b22b] font-bold py-2">
            Want tips & tricks to manage your money?
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </motion.div>
        <motion.div
          className="my-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full my-2 sm:my-0">
            <input
              className="w-full p-3 rounded-md text-black "
              type="email"
              placeholder="Enter your mail here"
              value={mail}
              onChange={(mail) => setMail(mail.target.value)}
            />
            <button
              className=" w-[180px] md:text-sm sm:text-md text-lg my-4 mx-auto sm:ml-4 border border-[#e3b22b] bg-[#e3b22b] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider"
              onClick={sendEmail}
            >
              Notify us
            </button>
          </div>
          <p className="my-1">
            We care about the protection of your data. Read our
            <span className="text-[#e3b22b] underline ml-1 flex items-center gap-1 cursor-pointer hover:text-white duration-300">
              Privacy policy.
              <BiLinkExternal className="mt-1" size={20} />{" "}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Newsletter;
