import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/esm/Button";


function Cart (){
    const {cartList, emptyCart, totalPrice} = useCartContext();
    
    return(
    <div>
        { cartList.map( (item) => (<CartItem key= {item.id} item={item} /> ))}
        {cartList.length > 0 ? (
        <div className="container">
            <div className="centrado">
                <h4 className="maxAncho">Precio total: € {totalPrice()} </h4>
            </div>
            <div className="d-flex justify-content-center align-content-center">
                <Link to="/checkout">
                    <Button className="btn btn-success mx-2"> Finalizar Compra </Button>
                </Link>
                <Button className="btn btn-danger mx-2"  onClick= {() => emptyCart()} > Vaciar Carrito </Button>
            </div>
        </div>
        ) : (
            <div>
                <h1 className="centrado" >El carrito de compras esta vacio</h1>
            </div>
            
        )
        }
    </div>
    )  
}

export default Cart;