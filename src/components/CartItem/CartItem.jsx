import React from 'react'
import { useCartContext } from '../../context/CartContext';


function CartItem ( {item} ) {
    const {deleteById} = useCartContext();

  return (
    <div>
        <h1> {item.title} </h1>
        <h4>Unidades : {item.quantity} </h4>
        <button onClick= {() => deleteById(item.id)}> Eliminar </button>
    </div>
  )
}

export default CartItem;