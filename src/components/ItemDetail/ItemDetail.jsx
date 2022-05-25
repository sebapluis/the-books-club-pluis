import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Button } from 'react-bootstrap';



function ItemDetail( {libro} ) {

    const [ cantidadDeProductos, setCantidadDeProductos ] = useState (null); 

    const { addToCart } = useCartContext();

    function addHandler (quantityToAdd) {
        setCantidadDeProductos (quantityToAdd);
        addToCart(libro, quantityToAdd);
    }


  return (
    <div className='container'>
        <div className='ancho mt-3 mb-3'>
            <div className='imgContainer'>
                <img src={libro.imagen} alt="Imagen del libro" className='img-fluid' />
            </div>
            <div className='infoContainer'>
                <h3 className='centrado'>{libro.title}</h3>
                <p className='centrado'><b>Autor</b>: {libro.autor}</p>
                <p className='centrado'><b>Editorial</b>: {libro.editorial}</p>
                <p className='centrado'><b>Sinopsis</b>: {libro.sinopsis}</p>
                <p className='centrado'><b>Precio</b>: €{libro.precio}</p>
                <div className='centrado'>
                    {cantidadDeProductos ?
                         <Button variant="outline-dark"><Link to='/cart' className='compra'>Finalizar compra de: { cantidadDeProductos } libros</Link></Button> :
                         <ItemCount initial={0} stock={libro.stock} onAdd={addHandler} />
                    }
                </div>
            </div>
        </div>
    </div>
  )
    }


export default ItemDetail;