import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const templateParams = {
    reply_to: mail,
    to_name: name,
    message: message,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(`service_ai4plf9`, `template_contact-001`, templateParams, {
        publicKey: `OYR1pBahHM4QPyouF`,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMail("");
          setName("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="w-full text-white px-4 py-16" id="contact">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="contact-info flex flex-col">
          <h1 className="text-4xl text-[#e3b22b] font-bold py-2">Contact Us</h1>
          <p className="text-gray-300">
            "Get in touch today! Fill out the form below and let's start the
            conversation together."
          </p>
          <div className="address-section my-6">
            <p className="flex gap-2 text-gray-300">
              <BiPhone color="#e3b22b" size={20} /> - +48 793 243 658
            </p>
            <p className="flex gap-2 text-gray-300">
              <BiLogoGmail color="#e3b22b" size={20} /> -
              example.krypto@gmail.com
            </p>
            <p className="flex gap-2 text-gray-300">
              <BiSolidMap color="#e3b22b" size={20} /> - 32 street, North
              Carolina
            </p>
          </div>
          <div className="flex gap-5">
            <BiLogoFacebook
              size={30}
              className="hover:text-[#e3b22b] hover:scale-110 transition-all cursor-pointer"
            />
            <BiLogoInstagram
              size={30}
              className="hover:text-[#e3b22b] hover:scale-110 transition-all cursor-pointer"
            />
            <BiLogoTwitter
              size={30}
              className="hover:text-[#e3b22b] hover:scale-110 transition-all cursor-pointer"
            />
            <BiLogoReddit
              size={30}
              className="hover:text-[#e3b22b] hover:scale-110 transition-all cursor-pointer"
            />
          </div>
        </div>
        <div className="contact-form flex flex-col gap-4">
          <input
            className="text-white font-medium px-4 py-2 rounded-md bg-transparent border border-[#e3b22b]"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(name) => setName(name.target.value)}
          />
          <input
            className="text-white font-medium px-4 py-2 rounded-md bg-transparent border border-[#e3b22b]"
            type="email"
            placeholder="Your mail"
            value={mail}
            onChange={(mail) => setMail(mail.target.value)}
          />
          <textarea
            className="text-white font-medium px-4 py-2 rounded-md bg-transparent border border-[#e3b22b]"
            type="text"
            placeholder="Your message"
            value={message}
            onChange={(message) => setMessage(message.target.value)}
          />
          <button className=" w-[180px] md:text-sm sm:text-md text-lg my-2 mx-auto sm:ml-0  border border-[#e3b22b] bg-[#e3b22b] py-3 text-center font-bold rounded-md transition-all hover:tracking-wider" onClick={sendEmail}>
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
