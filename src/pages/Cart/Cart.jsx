import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/checkout">
                <button> Finalizar Compra </button>
            </Link>
        </>
        ) : (
            <div className="container">
                <h1>El carrito esta vacio</h1>
            </div>
            
        )
        }
    </div>
    )  
}

export default Cart;