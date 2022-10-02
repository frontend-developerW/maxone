import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { Like, NotLike } from "../components/Svgs";
import { getCategorys, getProduct, getProducts, postLeads } from "../requests";
import { slides } from "../utils";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useLanguage } from "../redux/selectors";
import { setLikeCount } from "../redux/actions/languageActions";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Offer() {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState({});
  const [allProduct, setallProduct] = useState([]);
  const [ActiveSlide, setActiveSlide] = useState("");
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("red");
  const [categorys, setCategorys] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(
    (localStorage["like"] &&
      JSON.parse(localStorage["like"]).includes(product?.id)) ||
      false
  );
  const getData = async () => {
    try {
      const product = await getProduct(id);
      setProduct(product?.data);
      setActiveSlide(product?.data?.colors?.[0].image1);
      const category = await getCategorys();
      setCategorys(category?.data);

      const products = await getProducts();
      setallProduct(products?.data);
    } catch (e) {
      console.log("Error", e);
    }
  }
  Array.prototype.removeByValue = function (val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] === val) {
        this.splice(i, 1);
        i--;
      }
    }
    return this;
  };
  const liker = (e) => {
    const all = localStorage["like"];
    if (all) {
      if (JSON.parse(all).includes(e)) {
        console.log(JSON.parse(all).removeByValue(e));
        localStorage.setItem("like", `[${JSON.parse(all).removeByValue(e)}]`);
      } else {
        if (JSON.parse(all).length < 1) {
          localStorage.setItem("like", `[${e}]`);
        } else {
          localStorage.setItem("like", `[${JSON.parse(all)},${e}]`);
        }
      }
    } else {
      if (!all) {
        localStorage.setItem("like", `[${e}]`);
      }
    }
    dispatch(setLikeCount(JSON.parse(localStorage["like"]).length));
  };
  useEffect(() => {
    getData();
    console.log(id);
  }, [id]);
  async function postData() {
    toast("Loading....", { autoClose: 1000 });
    try {
      const { data } = await postLeads({
        product: product?.id,
        customer_name: name,
        phone: input
      });
      setModal(false);
      toast.success(data?.status, {
        progress: undefined
      });
    } catch (err) {
      console.log(err);
    }
  }

  const { currentLang, language, searchValue } = useLanguage();
  return searchValue.length > 4 ? (
    <div className="grid justify-between p-[7vw] gap-[2vw] grid-cols-4 pt-0">
      {allProduct
        ?.map((item, i) =>
          item[`name_${currentLang}`].includes(searchValue) && (
            <Card data={item} key={i} />
          ) 
        )}
    </div>
  ) :(
    <>
      <ToastContainer />
      <div className="p-[7vw] md:bg-transparent bg-[#fff]">
        <div className="flex md:flex-row flex-col gap-[4vw] mb-[4vw]">
          <div className="md:w-[50%] w-[100%] gap-[1vw] flex md:flex-row flex-col">
            <div className="border md:border-gray-600 border-transparent bg-[#fff] flex items-center justify-center cursor-pointer rounded-[2vw] p-[1vw]">
              <img
                src={ActiveSlide}
                alt=""
                className="md:h-[30vw] md:w-[30vw] h-[45vw] w-[45vw] object-contain"
              />
            </div>
            <div className="flex md:flex-col gap-[1vw]">
              {product?.colors?.map((item) => (
                <div
                  key={item?.id}
                  className="border md:border-gray-600 bg-[#fff] flex items-center justify-center cursor-pointer rounded-[2vw] p-[1vw]"
                  onClick={() => {
                    setActiveSlide(item?.image1);
                  }}
                >
                  <img
                    src={item?.image1}
                    alt=""
                    className="md:h-[9vw] h-[20vw] w-[100%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            {categorys?.map(
              (item) =>
                item?.id === product?.category && (
                  <h1
                    key={item?.id}
                    className="m-bold md:text-[#006BC5] md:text-[3vw] text-[6vw] tracking-[.4vw] mb-[3vw]"
                  >
                    {item?.[`name_${currentLang}`]}
                  </h1>
                )
            )}
            <p className="md:text-[#006BC5] md:text-[1.7vw] text-[3.7vw] mb-[2vw]">
              {product?.[`name_${currentLang}`]}
            </p>
            <p className="text-[#006BC5] md:text-[2.7vw] text-[5.7vw] mb-[2vw]">
              {product?.price} so'm
            </p>
            <p className="md:text-[#006BC5] md:text-[1.7vw] text-[3.7vw] mb-[2vw]">{language["color"]}</p>
            <div className="grid grid-cols-3 md:gap-[1vw] gap-[3vw] mt-[1vw]">
              {product?.colors?.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setColor(item.color);
                    setActiveSlide(item?.image1);
                  }}
                  className={`md:p-[1vw] p-[2vw] bg-[#fff] flex items-center border border-[#E3E3E3] md:rounded-[1vw] rounded-[2vw] md:gap-[.5vw] gap-[2.5vw] ${
                    item.color === color && "border-[#868686]"
                  } cursor-pointer`}
                >
                  <button
                    className={`md:w-[1.5vw] md:h-[1.5vw] w-[4.5vw] h-[4.5vw] rounded-[8vw]`}
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-[#000000] h-bold md:text-[1vw] text-[3vw]">
                    {item.color}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-[2vw] md:gap-[2vw] gap-[5vw]">
              <button
                onClick={() => setModal(true)}
                className=" md:w-[40%] w-[100%] md:bg-gradient-to-b md:from-[#74B4FF] md:to-[#3C84CF] text-[#fff] md:text-[1.4vw] text-[5.4vw] capitalize p-[.5vw]  md:py-[1vw] py-[2vw] rounded-[1vw] bg-gradient-to-r from-[#0056A6] to-[#007BD4]"
              >
                buy now
              </button>

              <div className="card offer">
                <button
                  onClick={() => {
                    liker(product.id);
                    setLiked(!liked);
                  }}
                >
                  {liked ? <Like /> : <NotLike />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#006BC5] md:text-[1.7vw] text-[3.7vw]">
            {product?.[`characteristic_${currentLang}`]}
          </p>
        </div>
        <h1 className="m-bold text-[#006BC5] md:text-[3vw] text-[5vw] mb-[3vw] text-center mt-[5vw]">
          {language["n"]}
        </h1>
        <div className="grid justify-between md:gap-[2vw] gap-[4vw] md:grid-cols-4 grid-cols-2">
          {allProduct.map(
            (item) =>
              item.category === product.category && item.brand === product.brand && (
                <Card key={item.id} data={item} />
              )
          )}
        </div>
      </div>

      {modal && (
        <div className="fixed w-full bg-[#0000006b] top-0 left-0 h-[100vh] z-[99] flex items-center justify-center ">
          <div
            className="absolute w-[100vw] h-[100vh]"
            onClick={() => setModal(false)}
          ></div>
          <div className="bg-white p-[2vw] rounded-[2vw] flex flex-col gap-[1vw] relative z-[88]">
            <p className="text-[#006BC5] text-[1.7vw] text-center">
              Buyurtma berish!
            </p>
            <input
              type="text"
              className="border outline-[#2379fa] p-[.4vw] text-[1.4vw]"
              placeholder="Ismingizni kiriting"
              onChange={(e) => setName(e.target.value)}
            />
            <PhoneInput country={"uz"} onChange={(phone) => setInput(phone)} />
            <button
              className={` ${
                input.length > 5 && name.length > 3
                  ? "bg-[#2379fa]"
                  : "bg-[#9c9c9c] "
              }  p-[.4vw] rounded-[.4vw] text-[#fff] text-[1.2vw]`}
              onClick={postData}
            >
              Yuborish
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Offer;
