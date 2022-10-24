import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import Card from "../components/Card";
import Goback from "../components/Goback";
import { FilterSvg, FilterWhite, GoBackSvg } from "../components/Svgs";
import { useLanguage } from "../redux/selectors";
import { getBrands, getCategorys, getProducts, getTypes } from "../requests";

function Products() {
  const [products, setProducts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [types, setTypes] = useState([]);
  const [activeType, setActiveType] = useState({
    id: Number(localStorage["type"]) || 2
  });
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(window.innerWidth > 768 ? 22 : 99999);
  const [brand, setBrand] = useState(Number(localStorage["brand"]) || 0);
  const [category, setCategory] = useState({
    id: Number(localStorage["category"]) || 1
  });
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(999999999);
  const [filterView, setFilterView] = useState(false);
  const { currentLang, language } = useLanguage();
  const getData = useCallback(async () => {
    try {
      const product = await getProducts();
      setProducts(product?.data);
      const category = await getCategorys();
      setCategorys(category?.data);
      setBrand(product?.data?.[0]?.brand);
      const brand = await getBrands();
      setBrands(brand?.data);

      const type = await getTypes();
      setTypes(type?.data);
    } catch (e) {
      console.log("Error", e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  window.onscroll = function () {
    if (window.scrollY + 1200 > document.body.offsetHeight) {
      setPage(page + 4);
    }
  };
  return (
    <>
      <div className="px-[7vw] pt-[6vw]">
        <Goback />
      </div>
      <div className="flex justify-between p-[7vw] pt-0 items-start">
        <div
          className={`md:bg-[#8cc5ff5b] md:h-auto h-[90vh] md:overflow-hidden overflow-y-scroll z-50 bg-[#c7e3ff] md:w-[25%] w-[90vw] md:left-auto left-[5vw] md:rounded-[2vw] rounded-[4vw] md:p-[3vw] md:pb-[3vw] pb-[26vw] p-[8vw] md:relative fixed transition-[.5s] md:top-0 md:z-0 ${
            filterView ? "top-[10vh]" : "top-[-200vh]"
          }`}
        >
          <div className="flex items-center md:gap-[1vw] gap-[4vw] relative">
            <FilterSvg />
            <h1 className="h-bold text-[#006BC5] md:text-[1.8vw] text-[8vw] capitalize">
              {language["i"]}
            </h1>
            <div
              className="md:hidden"
              onClick={() => setFilterView(!filterView)}
            >
              <div className="absolute top-0 right-0 text-[5vw]">&times;</div>
            </div>
          </div>

          <div className="flex flex-col md:mt-[2vw] mt-[6vw]">
            <h1 className="h-regular text-[#006BC5] md:text-[1.4vw] text-[5vw]">
              {language["f_3"]}
            </h1>
            <div className="flex flex-wrap md:gap-[1vw] gap-[3vw] mt-[1vw]">
              <button
                onClick={() => {
                  setCategory("");
                  window.innerWidth > 768 && setPage(8);
                }}
                className={` bg-[#fff] md:p-[.5vw] p-[2vw] md:px-[1vw] px-[5vw] rounded-[6vw] md:text-[.9vw] text-[4vw] ${
                  (category === "" && "bg-[#004B99] text-[#ffffff]") ||
                  "text-[#004B99] "
                }`}
              >
                {language["alls"]}
              </button>
              {categorys.map((item, i) => (
                <button
                  onClick={() => {
                    setCategory(item);
                    window.innerWidth > 768 && setPage(8);
                  }}
                  key={i}
                  className={` bg-[#fff] md:p-[.5vw] p-[2vw] md:px-[1vw] px-[5vw] rounded-[6vw] md:text-[.9vw] text-[4vw] ${
                    (category.id === item.id &&
                      "bg-[#004B99] text-[#ffffff]") ||
                    "text-[#004B99] "
                  }`}
                >
                  {item?.[`name_${currentLang}`]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:mt-[2vw] mt-[6vw]">
            <h1 className="h-regular text-[#006BC5] md:text-[1.4vw] text-[5vw]">
              {language["types"]}
            </h1>
            <div className="flex flex-wrap md:gap-[1vw] gap-[3vw] mt-[1vw]">
              {types.map((item, i) => (
                <button
                  onClick={() => {
                    setActiveType(item);
                    window.innerWidth > 768 && setPage(8);
                  }}
                  key={i}
                  className={` bg-[#fff] md:p-[.5vw] p-[2vw] md:px-[1vw] px-[5vw] rounded-[6vw] md:text-[.9vw] text-[4vw] ${
                    (activeType.id === item.id &&
                      "bg-[#004B99] text-[#ffffff]") ||
                    "text-[#004B99] "
                  }`}
                >
                  {item?.[`name_${currentLang}`]}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:mt-[2vw] mt-[6vw]">
            <h1 className="h-regular text-[#006BC5] md:text-[1.4vw] text-[5vw]">
              {language["y"]}
            </h1>
            <div className="grid grid-cols-2 md:gap-[1vw] gap-[3vw] mt-[1vw]">
              <button
                onClick={() => {
                  setBrand("");
                  window.innerWidth > 768 && setPage(8);
                }}
                className={` bg-[#fff] md:p-[.5vw] p-[2vw] md:px-[1vw] px-[5vw] rounded-[6vw] md:text-[.9vw] text-[4vw] ${
                  (brand === "" && "bg-[#004B99] text-[#ffffff]") ||
                  "text-[#004B99] "
                }`}
              >
                {language["alls"]}
              </button>
              {brands.map((item, i) => (
                <button
                  onClick={() => {
                    setBrand(item?.id);
                    window.innerWidth > 768 && setPage(8);
                  }}
                  key={i}
                  className={` bg-[#fff] md:p-[.5vw] p-[2vw] md:px-[1vw] px-[5vw] rounded-[6vw] md:text-[.9vw] text-[4vw]  ${
                    (brand === item?.id && "bg-[#004B99] text-[#fff]") ||
                    "text-[#004B99] "
                  }`}
                >
                  {item?.[`name_${currentLang}`]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-[2vw]">
            <h1 className="h-regular text-[#006BC5] md:text-[1.4vw] text-[5vw]">
              {language["u"]}
            </h1>
            <div className="mt-[1vw] flex items-center w-full bg-[#ffffff93] justify-between md:px-[1.5vw] md:py-[.5vw] rounded-[8vw] py-[4vw] px-[5vw]">
              <input
                type="text"
                placeholder="1.000.000"
                onChange={(e) => setPriceFrom(e.target.value)}
                className="outline-0 bg-transparent w-[60%]"
              />
              <span className="text-[#00000060]">dan</span>
            </div>
            <div className="md:mt-[1vw] mt-[3vw] flex items-center w-full bg-[#ffffff93] justify-between md:px-[1.5vw] md:py-[.5vw] rounded-[8vw] py-[4vw] px-[5vw]">
              <input
                type="text"
                placeholder="3.000.000"
                onChange={(e) => setPriceTo(e.target.value)}
                className="outline-0 bg-transparent w-[60%]"
              />
              <span className="text-[#00000060]">gacha</span>
            </div>
          </div>

          <div className="flex flex-col mt-[2vw]">
            <h1 className="h-regular text-[#006BC5] md:text-[1.4vw] text-[5vw] capitalize">
              {" "}
              {language["t"]}
            </h1>
            <button
              onClick={() => {
                localStorage.setItem("recomend", "1400000");
                window.location.reload();
              }}
              className="mt-[1vw] md:text-[1vw] text-[5vw] w-full bg-[#ffffff93] justify-between px-[1.5vw] text-[#004B99] md:py-[.8vw] py-[1.5vw] rounded-[8vw]"
            >
              {language["arzon"]}
            </button>
            <button
              onClick={() => {
                localStorage.setItem("recomend", "99900000");
                window.location.reload();
              }}
              className="md:mt-[1vw] mt-[3vw] md:text-[1vw] text-[5vw] w-full bg-[#ffffff93] justify-between px-[1.5vw] text-[#004B99] md:py-[.8vw] py-[1.5vw] rounded-[8vw]"
            >
              {language["qimmat"]}
            </button>
            {/* <button className="mt-[1vw] text-[1vw] w-full bg-[#ffffff93] justify-between px-[1.5vw] text-[#004B99] py-[.8vw] rounded-[3vw]">
          Yangi tovarlardan boshlash
          </button> */}
          </div>
        </div>
        <div
          className="absolute top-[5vw] right-[10vw]"
          onClick={() => setFilterView(!filterView)}
        >
          <FilterWhite />
        </div>
        <div className="md:w-[70%]">
          <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[6vw] mb-[3vw] md:text-left text-center">
            {category?.[`name_${currentLang}`]}
          </h1>
          <div className="grid justify-between gap-[2vw] md:grid-cols-3 grid-cols-2 pt-0">
            {products
              .slice(0, page)
              ?.map(
                (item, i) =>
                  category?.id === item?.category &&
                  activeType?.id === item?.type &&
                  brand === item?.brand &&
                  item?.price > priceFrom &&
                  item?.price < priceTo && <Card data={item} key={i} />
              )}
            {category === ""
              ? products
                  .slice(0, page)
                  ?.map(
                    (item, i) =>
                      activeType?.id === item?.type &&
                      brand === item?.brand &&
                      item?.price > priceFrom &&
                      item?.price < priceTo && <Card data={item} key={i} />
                  )
              : brand === ""
              ? products
                  .slice(0, page)
                  ?.map(
                    (item, i) =>
                      activeType?.id === item?.type &&
                      category === item?.category &&
                      item?.price > priceFrom &&
                      item?.price < priceTo && <Card data={item} key={i} />
                  )
              : null}

            {brand === "" &&
              category === "" &&
              products
                .slice(0, page)
                ?.map(
                  (item, i) =>
                    activeType?.id === item?.type &&
                    item?.price > priceFrom &&
                    item?.price < priceTo && <Card data={item} key={i} />
                )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
