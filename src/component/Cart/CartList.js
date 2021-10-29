import CartItem from "./CartItem";

export default function CartList(){
    return(<ul className="cart-list">
        <CartItem/>
        <CartItem/>
        <CartItem/>
    </ul>)
}