import React, {useEffect} from "react";
import { LangIcong, Liking, Search, Settings } from "./Svgs";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  
  return (
    <header>
      <nav className="flex items-center justify-between p-[1vw] pl-[5vw] pr-[5vw] bg-white">
        <NavLink to="/">
          <img
            src={require("../assets/img/logo.png")}
            alt="logo"
            className="w-[8vw]"
          />
        </NavLink>
        <ul className="flex items-center gap-[5vw] justify-center">
          <li>
            <NavLink
              to="/"
              className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white hover:border-b-[#004899] hover:opacity-100"
            >
              Noutbuklar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white hover:border-b-[#004899] hover:opacity-100"
            >
              Smartfonlar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white hover:border-b-[#004899] hover:opacity-100"
            >
              Televizorlar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
            >
              Muzlatgichlar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
            >
              Isitgichlar
            </NavLink>
          </li>
        </ul>
        <button className="flex flex-col items-center justify-center">
          <h1 className="text-[#0062B6] text-[1.4vw] h-bold">
            +998 99 011 89 34
          </h1>
          <p className="text-[#0062B6] text-[1vw] leading-[.8vw]">
            Call center bilan aloqa
          </p>
        </button>
      </nav>
      <div className="flex items-center justify-center p-[1vw] bg-[#004F9E] mb-[4vw] gap-[2vw]">
        <div className="flex justify-between items-center bg-white rounded-[10vw] p-[.4vw] pr-[2vw] pl-[2vw] w-[50%] gap-[1vw] search">
          <Search />
          <input
            type="search"
            className="outline-0 w-[85%] text-[1.4vw]"
            placeholder="Search"
          />
          <Settings />
        </div>
        <button className="relative like">
          <Liking />
          <div className="bg-red-600 flex items-center justify-center text-white w-[1.5vw] top-0 right-0 h-[1.5vw] text-[1vw] absolute rounded-[3vw]">
            7
          </div>
        </button>
        <button className="flex items-center lang">
          <div className="relative z-[2]">
            <LangIcong />
          </div>
          <select className="relative left-[-3vw] rounded-[3vw] outline-0 p-[.4vw] z-[1] bg-[#ffffff70] pl-[3.6vw] pr-[1vw] text-[#fff] text-[1.2vw]">
            <option value="uz">Uzbek</option>
            <option value="uz">Russian</option>
            <option value="uz">English</option>
          </select>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
