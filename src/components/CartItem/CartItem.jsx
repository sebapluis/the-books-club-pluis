import React from 'react'
import { useCartContext } from '../../context/CartContext';


function CartItem ( {item} ) {
    const {deleteById, deleteOneItem} = useCartContext();

  return (
    <>
    <div>
        <h1> {item.title} </h1>
        <h6>Unidades : {item.quantity} </h6>
        <h6>Precio por unidad: € {item.precio}</h6>
        <button onClick= {() => deleteOneItem(item.id)}> Eliminar una unidad </button>
        <br />
        <button onClick= {() => deleteById(item.id)}> Eliminar </button>
    </div>
    </>
  )
}

export default CartItem;