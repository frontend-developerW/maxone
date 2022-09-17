import React, { useState } from "react";
import Card from "../components/Card";
import { FilterSvg } from "../components/Svgs";
import { brands, categorys } from "../utils";

function Products() {
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState();
  return (
    <div className="flex justify-between p-[7vw] pt-0 items-start">
      <div className="bg-[#8cc5ff5b] w-[25%] rounded-[2vw] p-[3vw]">
        <div className="flex items-center gap-[1vw]">
          <FilterSvg />
          <h1 className="h-bold text-[#006BC5] text-[1.8vw]">Filter</h1>
        </div>

        <div className="flex flex-col mt-[2vw]">
          <h1 className="h-regular text-[#006BC5] text-[1.4vw]">
            Kategoriyalar
          </h1>
          <div className="flex flex-wrap gap-[1vw] mt-[1vw]">
            {categorys.map((item, i) => (
              <button
                onClick={() => setCategory(i)}
                key={i}
                className={` bg-[#fff] p-[.5vw] px-[1vw] rounded-[4vw] text-[.9vw] ${
                  category === i && "bg-[#004B99] text-[#fff]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-[2vw]">
          <h1 className="h-regular text-[#006BC5] text-[1.4vw]">Brend</h1>
          <div className="grid grid-cols-2 gap-[1vw] mt-[1vw]">
            {brands.map((item, i) => (
              <button
                onClick={() => setBrand(i)}
                key={i}
                className={` bg-[#fff] py-[.4vw] px-[1vw] rounded-[4vw] text-[.9vw] ${
                  brand === i && "bg-[#004B99] text-[#fff]"
                }`}
              >
                <img
                  src={item.logo}
                  className="w-full h-[2.5vw] object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col mt-[2vw]">
          <h1 className="h-regular text-[#006BC5] text-[1.4vw]">Narx</h1>
          <div className="mt-[1vw] flex items-center w-full bg-[#ffffff93] justify-between px-[1.5vw] py-[.5vw] rounded-[3vw]">
            <input
              type="text"
              placeholder="1.000.000"
              className="outline-0 bg-transparent w-[60%]"
            />
            <span className="text-[#00000060]">dan</span>
          </div>
          <div className="mt-[1vw] flex items-center w-full bg-[#ffffff93] justify-between px-[1.5vw] py-[.5vw] rounded-[3vw]">
            <input
              type="text"
              placeholder="3.000.000"
              className="outline-0 bg-transparent w-[60%]"
            />
            <span className="text-[#00000060]">gacha</span>
          </div>
        </div>

        <div className="flex flex-col mt-[2vw]">
          <h1 className="h-regular text-[#006BC5] text-[1.4vw]">Filter</h1>
          <button className="mt-[1vw] text-[1vw] w-full bg-[#ffffff93] justify-between px-[1.5vw] text-[#004B99] py-[.8vw] rounded-[3vw]">
            Arzonlaridan boshlash
          </button>
          <button className="mt-[1vw] text-[1vw] w-full bg-[#ffffff93] justify-between px-[1.5vw] text-[#004B99] py-[.8vw] rounded-[3vw]">
          Qimmatlaridan boshlash
          </button>
          <button className="mt-[1vw] text-[1vw] w-full bg-[#ffffff93] justify-between px-[1.5vw] text-[#004B99] py-[.8vw] rounded-[3vw]">
          Yangi tovarlardan boshlash
          </button>
        </div>
      </div>
      <div className="w-[70%]">
        <h1 className="m-bold text-[#006BC5] text-[3vw] mb-[3vw]">
          Smartfonlar
        </h1>
        <div className="grid justify-between gap-[2vw] grid-cols-3 pt-0">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
