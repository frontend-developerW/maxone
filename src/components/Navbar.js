import React, { useEffect } from "react";
import {
  CategorySvg,
  HomeIcon,
  HomeSvg,
  LangIcong,
  Liking,
  PhoneSvg,
  Search,
  SearchMobile,
  Settings
} from "./Svgs";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setLanguage, setSearch } from "../redux/actions/languageActions";
import { useLanguage } from "../redux/selectors";
function Navbar() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const dispatch = useDispatch();
  const changLang = (e) => {
    dispatch(setLanguage(e.target.value));
  };
  const { language, countLike } = useLanguage();
  return (
    <>
      <div className="pt-[14vw] hidden md:block">
        <header className="fixed w-[100%] z-50 top-0 left-0">
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
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["1"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["2"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["3"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["4"]}
                </NavLink>
              </li>
            </ul>
            <a href="tel:+998 99 011 89 34">
              <button className="flex flex-col items-center justify-center">
                <h1 className="text-[#0062B6] text-[1.4vw] h-bold">
                  +998 99 011 89 34
                </h1>
                <p className="text-[#0062B6] text-[1vw] leading-[.8vw]">
                  {language["6"]}
                </p>
              </button>
            </a>
          </nav>
          <div className="flex items-center justify-center p-[1vw] bg-[#004F9E] mb-[4vw] gap-[2vw]">
            <div className="flex justify-between items-center bg-white rounded-[10vw] p-[.4vw] pr-[2vw] pl-[2vw] w-[50%] gap-[1vw] search">
              <Search />
              <input
                type="search"
                className="outline-0 w-[85%] text-[1.4vw]"
                placeholder="Search"
                onInput={(e) => dispatch(setSearch(e.target.value))}
              />
              <Settings />
            </div>
            <button className="relative like">
              <Link to={"/likes"}>
                <Liking />
              </Link>
              <div className="bg-red-600 flex items-center justify-center text-white w-[1.5vw] top-0 right-0 h-[1.5vw] text-[1vw] absolute rounded-[3vw]">
                {countLike}
              </div>
            </button>
            <button className="flex items-center lang">
              <div className="relative z-[2]">
                <LangIcong />
              </div>
              <select
                className="relative left-[-3vw] rounded-[3vw] outline-0 p-[.4vw] z-[1] bg-[#ffffff70] pl-[3.6vw] pr-[1vw] text-[#fff] text-[1.2vw]"
                onChange={changLang}
                defaultValue={localStorage["lang"] || "uz"}
              >
                <option value="uz">Uzbek</option>
                <option value="ru">Russian</option>
                <option value="en">English</option>
              </select>
            </button>
          </div>
        </header>
      </div>
      <div className="justify-center flex md:hidden  pt-[3vw] pb-[3vw]">
        <div className="flex justify-between  items-center bg-[#3A88DA] rounded-[10vw] p-[2vw] w-[90vw] margin-auto gap-[3vw] px-[4vw]">
          <SearchMobile />
          <input
            type="text"
            className="outline-0 w-[85%] text-[4.4vw] bg-[#3A88DA] placeholder:text-[#fff] text-[#fff]"
            placeholder="Search"
            onInput={(e) => dispatch(setSearch(e.target.value))}
          />
          <Settings />
        </div>
      </div>

      <div className="md:hidden flex items-center justify-center fixed h-[25vw] p-[4vw] rounded-t-[6vw] shadow-xl shadow-[black] bg-gradient-to-b from-[#C8E4FF] to-[#fff] z-50 bottom-0 w-full px-[7vw]">
        <div className="flex relative justify-between w-full">
          <Link to="/">
            <div className="flex flex-col items-center gap-[1vw]">
              <HomeSvg />
              <p className="text-[3vw] text-[#004B99]">Home</p>
            </div>
          </Link>
          <div className="flex flex-col items-center gap-[1vw]">
            <button className="relative like">
              <Link to={"/likes"}>
                <Liking />
              </Link>
              <div className="bg-red-600 flex items-center justify-center text-white w-[3.5vw] top-[-1vw] right-[-1vw] h-[3.5vw] text-[2vw] absolute rounded-[3vw]">
                {countLike}
              </div>
            </button>
            <p className="text-[3vw] text-[#004B99]">LIKE</p>
          </div>
          <Link to="/" className="relative w-[10vw]">
            <img
              src={require("../assets/img/bar.png")}
              className="fixed left-[38.5vw] bottom-[12vw] w-[25vw] h-[25vw]"
            />
          </Link>
          <Link to="/products">
            <div className="flex flex-col items-center gap-[1vw]">
              <CategorySvg />
              <p className="text-[3vw] text-[#004B99]"> {language["9"]}</p>
            </div>
          </Link>
          <a href="tel:+998 99 011 89 34">
            <div className="flex flex-col items-center gap-[1vw]">
              <PhoneSvg />
              <p className="text-[3vw] text-[#004B99]">Call</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
