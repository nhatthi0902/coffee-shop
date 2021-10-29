import { actGetProductName } from "./action";
export function actGetProductNameAsync(keyword) {
  const data = [
    "Cà phê sữa đá",
    "Cà phê đen dá",
    "Bạt sỉu",
    "Sữa tươi cà phê",
    "Trà sữa",
    "Ca cao",
  ];

  let result = data.filter((item) => item.toLowerCase().startsWith(keyword.toLowerCase().trim()));
  if (keyword.trim() === "") result = [];

  return async (dispatch) => {
    dispatch(actGetProductName(result));
  };
}
