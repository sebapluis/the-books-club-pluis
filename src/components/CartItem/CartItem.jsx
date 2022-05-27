import React from 'react'
import { useCartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/esm/Button';
import "./CartItem.css"


function CartItem ( {item} ) {
    const {deleteById, deleteOneItem} = useCartContext();

  return (
    <>
    <div className='container d-flex justify-content-start align-content-center principal flex-row mt-4'>
        <div className='d-flex justify-content-center align-content-center imagen'>
          <img src={item.imagen} alt="Imagen del libro" className='img-fluid' />
        </div>
        <div className='d-flex justify-content-start align-items-center flex-row me-2'>
          <h2> {item.title} </h2>
        </div>
        <div className="d-flex justify-content-end align-items-center m-4 flex-row">
          <h5>Precio unitario: € {item.precio}</h5>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-row">
          <h5>Unidades: {item.quantity}</h5>
        </div>
        <div className='d-flex flex-column align-content-end flex-row justify-content-center'>
          <Button onClick= {() => deleteOneItem(item.id)} className="btn btn-dark mt-2 ms-4 p-1">Quitar unidad </Button>
          <Button onClick= {() => deleteById(item.id)} className="btn btn-dark mt-2 ms-4 p-1"> Eliminar </Button>
        </div>
    </div>
    </>
  )
}

export default CartItem;