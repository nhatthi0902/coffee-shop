import "./cart.scss";
import { useState } from "react";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartTitle from "./CartTitle";
import EmptyMessage from "./EmptyMessage";
export default function Cart({ cart }) {
  const [shipping, setShiping] = useState(15000)

  function freeShip(shipping){
    setShiping(shipping)
  }
  return (
    <div className="cart">
      <CartTitle title="Thông tin giỏ hàng"/>
      <CartList cart={cart}/>
      {(cart.length>0)&&<CartSummary cart={cart} shiping={shipping} discount={20000} onChangeShiping= {freeShip}/>}
      {(cart.length===0)&&<EmptyMessage message="No item"/>}
    </div>
  );
}
