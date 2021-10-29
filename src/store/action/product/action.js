import {
  ACT_GET_ALL_PRODUCT_PER_PAGE,
  ACT_GET_CURRENT_PAGE,
  ACT_GET_PRODUCT_NAME
} from "./productAction.type";
export function actGetAllProductPerPage(page) {
  return {
    type: ACT_GET_ALL_PRODUCT_PER_PAGE,
    payload: page,
  };
}

export function actGetCurrentPage() {
  return {
    type: ACT_GET_CURRENT_PAGE,
    payload: "",
  };
}

export function actGetProductName(productNames) {
  return {
    type: ACT_GET_PRODUCT_NAME,
    payload: productNames,
  };
}
