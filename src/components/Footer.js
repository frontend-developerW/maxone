import React from "react";
import { FaceBookSvg, InstagramSvg, TwitterSvg } from "./Svgs";

function Footer() {
  return (
    <div className="p-[5vw] pl-[7vw] pr-[7vw] bg-[#004B99] flex gap-[5vw] justify-between md:flex-row flex-col">
      <div className="flex md:items-stretch items-center justify-between md:w-[25%] w-full md:flex-col ">
        <img
          src={require("../assets/img/footer.png")}
          className="md:w-[4vw] w-[20vw]"
          alt=""
        />
        <p className="text-white text-[1.1vw] md:block hidden mt-[1.5vw]">
          Quo is the most easier way for transaction with your friends and
          family, No matter where are you. An exceptional way for make your life
          one step easier.
        </p>
        <div className="flex items-center md:gap-[1vw] gap-[3vw] mt-[2vw]">
          <div className="md:w-[3vw] md:h-[3vw] w-[9vw] h-[9vw]  flex items-center justify-center rounded-[5vw] bg-[#396BB5]">
            <FaceBookSvg />
          </div>
          <div className="md:w-[3vw] md:h-[3vw] w-[9vw] h-[9vw]  flex items-center justify-center rounded-[5vw] bg-[#396BB5]">
            <TwitterSvg />
          </div>
          <div className="md:w-[3vw] md:h-[3vw] w-[9vw] h-[9vw]  flex items-center justify-center rounded-[5vw] bg-[#396BB5]">
            <InstagramSvg />
          </div>
        </div>
      </div>
      <ul className="md:block ">
        <li>
          <h1 className="text-white md:text-[1.5vw] text-[6.5vw] mt-[1.5vw]">Company</h1>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            About Us
          </a>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            Contact Us
          </a>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            Support
          </a>
        </li>
        <li className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            News/Blog
          </a>
        </li>
      </ul>
      <ul className="md:block ">
        <li  className=" md:mr-0 mr-[5vw] md:block hidden">
          <h1 className="text-white text-[1.5vw]  mt-[1.5vw]">Terms</h1>
        </li>
        <li  className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            About Us
          </a>
        </li>
        <li  className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            Contact Us
          </a>
        </li>
        <li  className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            Support
          </a>
        </li>
        <li  className="md:flex inline-block md:mr-0 mr-[5vw]">
          <a
            href="#"
            className="text-white md:text-[1vw] text-[3.5vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            News/Blog
          </a>
        </li>
      </ul>
      <ul className="md:block hidden">
        <li>
          <h1 className="text-white text-[1.5vw] mt-[1.5vw]">Contact</h1>
        </li>
        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            Support
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white text-[1vw] mt-[1.5vw] opacity-70 hover:opacity-100"
          >
            News/Blog
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
