import {
  ACT_ADD_TO_CART,
  ACT_GET_CART,
  ACT_UPDATE_CART,
} from "../../action/cart/cart.type";

const initialState = {
  totalItem: 0,
  cart: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_ADD_TO_CART:
      let newTotalItem = state.totalItem + 1;
      return {
        ...state,
        totalItem: newTotalItem,
      };
    case ACT_GET_CART:
      return { ...state };
    default:
      return state;
  }
}
