import { FaCartArrowDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import "./CartWidget.css"

const CartWidget = () => {
    const { totalCount } = useCartContext();
   
    return(
    <NavLink to= "/cart" className="none">
        <FaCartArrowDown className="cart none"/> 
        <span> {totalCount() > 0 ? totalCount() : null} </span>
    </NavLink>    
    )
}

export default CartWidget;
