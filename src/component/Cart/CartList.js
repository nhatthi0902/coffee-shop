import CartItem from "./CartItem";

export default function CartList({cart}){
    return(<ul className="cart-list">
        {cart.map((item,index)=>{
            return<CartItem data ={item} key={index}/>
        })}
    </ul>)
}