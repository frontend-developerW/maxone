import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { GoBackSvg } from "../components/Svgs";
import { getProducts } from "../requests";
function Likes() {
  const [products, setProducts] = useState([]);
  const getData = useCallback(async () => {
    try {
      const product = await getProducts();
      setProducts(product?.data);
    } catch (e) {
      console.log("Error", e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className=" px-[7vw] ">
        {window.innerWidth > 768 && (
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-[1vw] bg-[#2ca4ff8f] rounded-[10vw] pr-[2vw] mb-[5vw]"
          >
            <GoBackSvg />
            <p className="text-[#006BC5] text-[3vw] md:text-[1.5vw]">Orqaga</p>
          </button>
        )}
        <h1 className="m-bold md:mt-0 mt-[5vw]text-left text-[#006BC5] md:text-[3vw] text-[5vw]">
          Like bosilgan tovarlar
        </h1>
        <p className="text-[#006BC5] text-[3vw] md:text-[1.5vw] mb-[.4vw]">
          Ozingizga yoqqan tovarlarga like bosing va saqlab qoying
        </p>
      </div>
      {localStorage.getItem("like") === null ? (
        <h1 className="m-bold  my-[5vw] text-left text-[#006BC5] md:text-[3vw] text-[5vw] px-[7vw]">
          Tovar mavjud emas
        </h1>
      ) : (
        <div className="grid justify-between p-[7vw] gap-[2vw] md:grid-cols-4 grid-cols-2 pt-0 mt-[4vw]">
          {localStorage.getItem("like") &&
            products?.map(
              (item, i) =>
                JSON.parse(localStorage["like"] ?? [" "]).includes(item.id) && (
                  <Card data={item} key={i} />
                )
            )}
          {JSON.parse(localStorage["like"] ?? [" "]).length < 1 && (
            <h1 className="m-bold text-[#006BC5] text-[3vw] mb-[3vw]">
              Yoqtirilgan maxsulotlar mavjud emas
            </h1>
          )}
        </div>
      )}
      {/*  */}
    </div>
  );
}

export default Likes;
