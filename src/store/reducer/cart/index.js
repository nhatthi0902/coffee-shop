import {
  ACT_ADD_TO_CART,
  ACT_GET_CART,
  ACT_UPDATE_CART,
  ACT_DELETE_CART,
  ACT_RESET_CART,
  ACT_UPDATE_AMOUNT
} from "../../action/cart/cart.type";

const initialState = {
  totalItem: 0,
  cart: [],
  total:0,
  shipping:0,
  discount: 0
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_ADD_TO_CART:
      let newTotalItem = state.totalItem + 1;
      console.log("NEW CART ITEM:", action.payload);
      return {
        ...state,
        totalItem: newTotalItem,
        cart: [...state.cart, action.payload],
      };
    case ACT_DELETE_CART:
      let total = state.totalItem - 1;
      return {
        ...state,
        totalItem: total,
        cart: [...state.cart].filter((x, index) => x.id !== action.payload),
      };
    case ACT_UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
              price: action.payload.price,
            };
          }
          return item;
        }),
      };
    case ACT_GET_CART:
      return { ...state };
    case ACT_RESET_CART:
      return {
        ...state,
        totalItem: 0,
        cart: [],
      };

    case ACT_UPDATE_AMOUNT:
      return{
        ...state,
        total: action.payload.total,
        shipping: action.payload.shipping,
        discount: action.payload.discount
      }
    default:
      return state;
  }
}
