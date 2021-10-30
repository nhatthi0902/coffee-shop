import Button from "../Button";
import Quantity from "../Quantity";
import NumberFormat from "react-number-format";
export default function CartItem({ data }) {
  return (
    <li className="cart-item">
      <div className="cart-item-image">
        <img src={data.imageUrl} alt="" />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-info-name">{data.name}</p>
        <div className="cart-item-info-size">
          <span>Size: </span>
          <span>
            <strong>{data.size}</strong>
          </span>
        </div>
        <Quantity currentQuantity={data.quantity} size="small" />
      </div>
      <div className="cart-item-action">
        <Button extendClass={"btn-delete-cart-item"}>Xoá</Button>
        <span className="cart-item-price">
          <NumberFormat
            value={data.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"đ"}
          />
        </span>
      </div>
    </li>
  );
}
