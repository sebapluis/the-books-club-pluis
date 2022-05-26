import React from 'react'
import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';


function CartItem ( {item} ) {
    const {deleteById, deleteOneItem} = useCartContext();

  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-content-center'>
        <h1 className='m-2'> {item.title} </h1>
        <p>X{item.quantity} </p>
        <h6>€ {item.precio}</h6>
        <Button onClick= {() => deleteOneItem(item.id)}> - </Button>
        <br />
        <Button onClick= {() => deleteById(item.id)}> X </Button>
    </div>
    </>
  )
}

export default CartItem;