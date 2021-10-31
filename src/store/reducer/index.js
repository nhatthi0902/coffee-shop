import { combineReducers } from "redux";
import navigationReducer from "./navigation";
import productReducer from "./product";
import cartReducer from "./cart";
import utilReducer from "./util";
import orderReducer from "./order";

const rootReducer = combineReducers({
  navigationReducer,
  productReducer,
  orderReducer,
  utilReducer,
  cartReducer,
});

export default rootReducer;
