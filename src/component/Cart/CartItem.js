import { useState } from "react";
import Button from "../Button";
import Quantity from "../Quantity";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { actDeleteCart, actUpdateCart } from "../../store/action/cart";
import { DeleteOutlined } from "@ant-design/icons";
export default function CartItem({ data, key }) {
  const dispatch = useDispatch()
  const [currentQuantity, setCurrentQuantity] = useState(data.quantity)
  const [currentPrice, setCurrentPrice] = useState(data.price)
  function deleteCart(id){
    dispatch(actDeleteCart(id))
  }
  function changeQuantity(number){
    let newPrice = (currentPrice/currentQuantity)*number
    setCurrentQuantity(number)
    setCurrentPrice(newPrice)
    updateCart(number, newPrice)
  }
  function updateCart(number, newPrice){
    let updateInfo = {
      id:data.id,
      quantity:number,
      price: newPrice
    }

    dispatch(actUpdateCart(updateInfo))
  }
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
        <Quantity currentQuantity={currentQuantity} size="small" onChangeQuantity={changeQuantity}/>
      </div>
      <div className="cart-item-action">
        <Button extendClass={"btn-delete-cart-item"} onClick={()=>{deleteCart(data.id)}}><DeleteOutlined /></Button>
        <span className="cart-item-price">
          <NumberFormat
            value={currentPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"đ"}
          />
        </span>
      </div>
    </li>
  );
}
