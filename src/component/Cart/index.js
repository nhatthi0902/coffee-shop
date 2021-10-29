import "./cart.scss";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import CartTitle from "./CartTitle";

export default function Cart({ cart }) {
  return (
    <div className="cart">
      <CartTitle title="Thông tin giỏ hàng"/>
      <CartList />
      <CartSummary />
    </div>
  );
}
