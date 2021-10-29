import Button from "../Button";
import classNames from "classnames";
import "./quantity.scss";
export default function Quantity({ currentQuantity, onChangeQuantity, size }) {
  const classes = classNames(["quantity", size]);
  function increaseQuantity() {
    let quantity = currentQuantity + 1;
    onChangeQuantity(quantity);
  }

  function decreaseQuantity() {
    let quantity = currentQuantity <= 1 ? 1 : currentQuantity - 1;
    onChangeQuantity(quantity);
  }

  return (
    <div className={classes}>
      <Button onClick={decreaseQuantity} extendClass="quantity-btn">
        -
      </Button>
      <span className="quantity-number">{currentQuantity}</span>
      <Button onClick={increaseQuantity} extendClass="quantity-btn">
        +
      </Button>
    </div>
  );
}
