import React from "react";

function Footer() {
  return (
    <div className="p-[5vw] pl-[7vw] pr-[7vw] bg-[#004B99] flex gap-[5vw] justify-between">
      <div className="flex flex-col w-[25%]">
        <img
          src={require("../assets/img/footer.png")}
          className="w-[4vw]"
          alt=""
        />
        <p className="text-white text-[1.1vw] mt-[1.5vw]">
          Quo is the most easier way for transaction with your friends and
          family, No matter where are you. An exceptional way for make your life
          one step easier.
        </p>
      </div>
      <ul>
        <li>
          <h1 className="text-white text-[1.5vw] mt-[1.5vw]">Company</h1>
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
      <ul>
        <li>
          <h1 className="text-white text-[1.5vw] mt-[1.5vw]">Terms</h1>
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
      <ul>
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
