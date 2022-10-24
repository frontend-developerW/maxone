import axios from "axios";

export const getProducts = async () =>
  await axios.get(
    "https://api.maxone.uz/api/products/?order=" +
      Number(localStorage["recomend"]).toFixed()
  );
export const getProduct = async (id) =>
  await axios.get("https://api.maxone.uz/api/products/" + id);
export const getBestProducts = async (id) =>
  await axios.get("https://api.maxone.uz/api/best_products/");
export const getSliders = async (id) =>
  await axios.get("https://api.maxone.uz/api/sliders/");
export const getCategorys = async () =>
  await axios.get("https://api.maxone.uz/api/categories/?format=json");
export const getBrands = async (id) =>
  await axios.get("https://api.maxone.uz/api/brands/?type=" + id);
export const postLeads = async (e) =>
  await axios.post("https://api.maxone.uz/api/leads/", e);
export const getTypes = async () =>
  await axios.get("https://api.maxone.uz/api/types/");
