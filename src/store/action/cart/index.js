import { ACT_GET_CART, ACT_ADD_TO_CART, ACT_UPDATE_CART } from "./cart.type";

export function actGetCart() {
  return {
    type: ACT_GET_CART,
    payload: {},
  };
}

export function actAddCart(cart) {
  return {
    type: ACT_ADD_TO_CART,
    payload: cart,
  };
}

export function actUpdateCart(id) {}
