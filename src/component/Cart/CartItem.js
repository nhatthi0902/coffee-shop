import Button from '../Button'
import Quantity from '../Quantity'
export default function CartItem(){
    return(<li className="cart-item">
        <div className="cart-item-image">
            <img src="./images/coffee1.jpg" alt=""/>
        </div>
        <div className="cart-item-info">
            <p className="cart-item-info-name">Cà phê sữa</p>
            <div className="cart-item-info-size">
                <span>Size: </span><span><strong>M</strong></span>
            </div>
            <Quantity currentQuantity={2} size="small"/>
        </div>
        <div className="cart-item-action">
            <Button extendClass={"btn-delete-cart-item"}>Xoá</Button>
            <span className="cart-item-price">15,000</span>
        </div>
    </li>)
}