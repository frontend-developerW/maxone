import React, { useEffect, useCallback, useState } from "react";
import Card from "../components/Card";
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

  return (
    <div>
      <div className="grid justify-between p-[7vw] gap-[2vw] md:grid-cols-4 grid-cols-2 pt-0 mt-[4vw]">
        {products?.map(
          (item, i) =>
            JSON.parse(localStorage["like"]).includes(item.id) && (
              <Card data={item} key={i} />
            )
        )}
        {JSON.parse(localStorage["like"]).length < 1 && (
          <h1 className="m-bold text-[#006BC5] text-[3vw] mb-[3vw]">
           Yoqtirilgan maxsulotlar mavjud emas
          </h1>
        )}
      </div>
    </div>
  );
}

export default Likes;
