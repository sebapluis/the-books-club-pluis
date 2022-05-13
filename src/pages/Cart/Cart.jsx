import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";

function Cart (){
    const {cartList, emptyCart} = useCartContext();
    
    return(
    <div>
        { cartList.map( item => <CartItem key= {item.id} item={item} /> )}
        <button onClick= {() => emptyCart()} > Vaciar Carrito </button>
    </div>
    )  
}

export default Cart;