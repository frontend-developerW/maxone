import { useSelector } from "react-redux";
export const useLanguage = () => useSelector(({ language }) => language);
