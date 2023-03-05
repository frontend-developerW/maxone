import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Goback from "../components/Goback";
import { GoBackSvg } from "../components/Svgs";
import { useLanguage } from "../redux/selectors";
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
  const { language } = useLanguage();
  return (
    <div>
      <div className=" px-[7vw] ">
        <Goback />
        <h1 className="m-bold md:mt-0 mt-[5vw]text-left text-[#006BC5] md:text-[3vw] text-[5vw]">
          {language["likes"]}
        </h1>
        <p className="text-[#006BC5] text-[3vw] md:text-[1.5vw] mb-[.4vw]">
          {language["likes_2"]}
        </p>
      </div>
      <div className="grid justify-between p-[7vw] gap-[2vw] md:grid-cols-4 grid-cols-2 pt-0 mt-[4vw]">
        {localStorage.getItem("like") &&
          products?.map(
            (item, i) =>
              JSON.parse(localStorage["like"] ?? [" "]).includes(item.id) && (
                <Card data={item} key={i} />
              )
          )}
        {JSON.parse(localStorage["like"] ?? [" "]).length < 1 && (
          <h1 className="m-regular text-[#006BC5] md:text-[3vw] mb-[3vw]">
            {language['likesnot']}
          </h1>
        )}
      </div>
    </div>
  );
}

export default Likes;
