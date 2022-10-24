import React, { useEffect, useState } from "react";
import {
  CategorySvg,
  HomeIcon,
  HomeSvg,
  LangIcong,
  Liking,
  PhoneSvg,
  Search,
  SearchMobile,
  Settings,
  ToTopSvg
} from "./Svgs";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { setLanguage, setSearch } from "../redux/actions/languageActions";
import { useLanguage } from "../redux/selectors";
import { getProducts } from "../requests";
import Card from "./Card";
import CurrencyFormat from "react-currency-format";
function Navbar() {
  const location = useLocation();
  const [activeBottom, setActiveBottom] = useState(false);
  const [likeView, setLikeView] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { language, countLike, currentLang } = useLanguage();
  const [allProduct, setallProduct] = useState([]);
  const getData = async () => {
    try {
      const products = await getProducts();
      setallProduct(products?.data);
    } catch (e) {
      console.log("Error", e);
    }
  };
  const scrollTo = () => {
    setActiveBottom(false);
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTo();
  }, [location]);
  useEffect(() => {
    setLikeView(true);
    setTimeout(() => {
      setLikeView(false);
    }, 3000);
  }, [countLike]);
  useEffect(() => {
    setLikeView(false);

    getData();
  }, []);

  window.onwheel = function () {
    if (window.scrollY > window.innerHeight) {
      setActiveBottom(true);
    } else {
      setActiveBottom(false);
    }
  };
  const dispatch = useDispatch();
  const changLang = (e) => {
    dispatch(setLanguage(e.target.value));
  };

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
                  {language["main"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["all_phones"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["f_3"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["f_4"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/terms"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["f_2"]}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-[#004899] text-[1.2vw]  opacity-70 border-b border-b-white  hover:border-b-[#004899] hover:opacity-100"
                >
                  {language["f_1"]}
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
          <div className="relative">
            <div className="flex items-center justify-center p-[1vw]  bg-gradient-to-tr  from-[#0074E7] via-[#004B99] to-[#0074E7] mb-[4vw] gap-[2vw]">
              <div className="flex justify-between items-center bg-white rounded-[10vw] p-[.4vw] pr-[2vw] pl-[2vw] w-[50%] gap-[1vw] search">
                <Search />
                <input
                  type="text"
                  className="outline-0 w-[85%] text-[1.4vw]"
                  placeholder={language["search"]}
                  onInput={(e) => {
                    setSearchValue(e.target.value);
                    dispatch(setSearch(e.target.value));
                  }}
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
              <label htmlFor="lang">
                <button className="flex items-center lang">
                  <div className="relative z-[2]">
                    <LangIcong />
                  </div>
                  <select
                    className="relative left-[-3vw] rounded-[3vw] outline-0 p-[.4vw] z-[1] bg-[#ffffff70] pl-[3.6vw] pr-[1vw] text-[#fff] text-[1.2vw]"
                    onChange={changLang}
                    defaultValue={localStorage["lang"] || "uz"}
                    id="lang"
                  >
                    <option value="uz">O'zbekcha</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
                </button>
              </label>
            </div>
            {searchValue.length > 2 && (
              <div className="absolute w-[48vw] bg-[#fff] rounded-[1vw] left-[16vw] top-[5vw] max-h-[35vw] overflow-auto">
                <div className="grid justify-between p-[1vw] grid-cols-1 pt-0">
                  {allProduct?.map(
                    (item, i) =>
                      item[`name_${currentLang}`]
                        .toLocaleLowerCase()
                        .includes(searchValue.toLocaleLowerCase()) && (
                        <Link
                          to={"/offer/" + item?.id}
                          onClick={() => setSearchValue("")}
                        >
                          <div className="flex gap-[1vw] border-b p-[1vw]">
                            <img
                              src={item?.image}
                              className="w-[6vw] h-[6vw] object-contain"
                              alt=""
                            />
                            <div className="flex flex-col">
                              <p className="text-[1.6vw]">
                                {item[`name_${currentLang}`]}
                              </p>
                              <p className="text-[1.6vw] text-[#004B99]">
                                <CurrencyFormat
                                  value={item?.price || "0"}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={""}
                                />{" "}
                                so'm
                              </p>
                            </div>
                          </div>
                        </Link>
                      )
                  )}
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
      <div className="justify-center flex md:hidden  pt-[3vw] pb-[3vw] relative px-[3vw] gap-[2vw]">
        <div className="flex justify-between  items-center bg-[#3A88DA] rounded-[10vw] p-[2vw] w-[90vw] margin-auto gap-[3vw] px-[4vw]">
          <SearchMobile />
          <input
            type="text"
            className="outline-0 w-[85%] text-[4.4vw] bg-[#3A88DA] placeholder:text-[#fff] text-[#fff]"
            placeholder={language["search"]}
            onInput={(e) => {
              setSearchValue(e.target.value);
              dispatch(setSearch(e.target.value));
            }}
          />
          <Settings />
        </div>
        <select
          className="relative px-[2vw] rounded-[10vw] text-[#fff] bg-[#3A88DA] text-[4vw]"
          onChange={changLang}
          defaultValue={localStorage["lang"] || "uz"}
          id="lang"
        >
          <option value="uz">O'z</option>
          <option value="ru">Ру</option>
          <option value="en">En</option>
        </select>
        {searchValue.length > 2 && (
          <div className="absolute w-[90vw] bg-[#fff] rounded-[1vw] left-[5vw] top-[16vw] max-h-[80vh] overflow-auto z-50">
            <div className="grid justify-between p-[2vw] grid-cols-1 pt-0">
              {allProduct?.map(
                (item, i) =>
                  item[`name_${currentLang}`]
                    .toLocaleLowerCase()
                    .includes(searchValue.toLocaleLowerCase()) && (
                    <Link
                      to={"/offer/" + item?.id}
                      onClick={() => setSearchValue("")}
                    >
                      <div className="flex gap-[1vw] border-b p-[1vw]">
                        <img
                          src={item?.image}
                          className="w-[16vw] h-[16vw] object-contain"
                          alt=""
                        />
                        <div className="flex flex-col">
                          <p className="text-[3.6vw]">
                            {item[`name_${currentLang}`]}
                          </p>
                          <p className="text-[3.6vw] text-[#004B99]">
                            <CurrencyFormat
                              value={item?.price || "0"}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={""}
                            />{" "}
                            so'm
                          </p>
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        )}
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
              {likeView && (
                <div className="absolute w-[60vw] h-[20vw] top-[-22vw] left-[5vw] z-50 rounded-[3vw] rounded-bl-none  bg-gradient-to-b from-[#C8E4FF] to-[#fff] animate-in">
                  <p className="text-[5vw] text-[#004B99]">
                    Like bosilgan tovarlar bu yerda
                  </p>
                </div>
              )}
              <Link to={"/likes"}>
                <Liking />
              </Link>
              <div className="bg-red-600 flex items-center justify-center text-white w-[3.5vw] top-[-1vw] right-[-1vw] h-[3.5vw] text-[2vw] absolute rounded-[3vw]">
                {countLike}
              </div>
            </button>
            <p className="text-[3vw] text-[#004B99]">LIKE</p>
          </div>
          <div className="relative w-[10vw]">
            <img
              src={require("../assets/img/bar.png")}
              className="fixed left-[38.5vw] bottom-[12vw] w-[25vw] h-[25vw]"
            />
          </div>
          <a href="/#brands">
            <div className="flex flex-col items-center gap-[1vw]">
              <CategorySvg />
              <p className="text-[3vw] text-[#004B99]"> {language["9"]}</p>
            </div>
          </a>
          <a href="tel:+998 99 011 89 34">
            <div className="flex flex-col items-center gap-[1vw]">
              <PhoneSvg />
              <p className="text-[3vw] text-[#004B99]">Call</p>
            </div>
          </a>
        </div>
      </div>
      {window.innerWidth > 768 && (
        <button
          className={`fixed  ${
            activeBottom ? "right-[3vw]" : "right-[-10vw]"
          } bottom-[3vw] transition-[.4s]`}
          onClick={scrollTo}
        >
          <ToTopSvg />
        </button>
      )}
    </>
  );
}

export default Navbar;
