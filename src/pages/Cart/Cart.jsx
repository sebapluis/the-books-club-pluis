import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";

function Cart (){
    const {cartList, emptyCart, totalPrice} = useCartContext();
    
    return(
    <div>
        { cartList.map( (item) => (<CartItem key= {item.id} item={item} /> ))}
        {cartList.length > 0 ? (
        <>
            <button onClick= {() => emptyCart()} > Vaciar Carrito </button>
            <h5>Precio total: € {totalPrice()} </h5>
        </>
        ) : (
            <h1>El carrito esta vacio</h1>
        )
        }
    </div>
    )  
}

export default Cart;