import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationItem from "./NavigationItem";
import { actNavigate } from "../../store/action/navigation";
import { actGetCart } from "../../store/action/cart";
export default function Navigation() {
  const navigationList = useSelector(
    (state) => state.navigationReducer.navigationList
  );
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetCart())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function selectedItem(id) {
    dispatch(actNavigate(id));
    window.scrollTo(0, 0);
  }
  return (
    <ul className="menu">
      {navigationList.map((item) => {
        return (
          <NavigationItem
            data={item}
            key={item.id}
            onSelected={selectedItem}
            cart={cart}
          />
        );
      })}
    </ul>
  );
}
