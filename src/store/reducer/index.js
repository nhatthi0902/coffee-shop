import { combineReducers } from "redux";
import navigationReducer from "./navigation";
import productReducer from "./product";
import cartReducer from "./cart";
import utilReducer from "./util";

const rootReducer = combineReducers({
  navigationReducer,
  productReducer,
  utilReducer,
  cartReducer,
});

export default rootReducer;
