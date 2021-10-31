import { ACT_GET_CART, ACT_ADD_TO_CART, ACT_UPDATE_CART, ACT_DELETE_CART } from "./cart.type";

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

export function actUpdateCart(updateInfo) {
  return{
    type:ACT_UPDATE_CART,
    payload: updateInfo
  }
}
export function actDeleteCart(id) {
  return{
    type: ACT_DELETE_CART,
    payload: id
  }
}
