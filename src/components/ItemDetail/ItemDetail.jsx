import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";



function ItemDetail( {libro} ) {

    const [ cantidadDeProductos, setCantidadDeProductos ] = useState (null); 

    function addHandler (quantityToAdd) {
        setCantidadDeProductos (quantityToAdd)
    }


  return (
        <div className='flex-container mt-2'>
            <div className='containerImagen'>
                <img src={libro.imagen} alt="Imagen del libro" />
            </div> 
            <div className='flex'>
                <h3>{libro.title}</h3>
                <p><b>Autor</b>: {libro.autor}</p>
                <p><b>Editorial</b>: {libro.editorial}</p>
                <div className='sinopsis'>
                    <p><b>Sinopsis</b>: {libro.sinopsis}</p>
                </div>    
                <p><b>Precio</b>: €{libro.precio}</p>
                <div>
                    {cantidadDeProductos ?
                         <button><Link to='/cart'>Finalizar compra de:{ cantidadDeProductos } libros</Link></button> :
                         <ItemCount initial={0} stock={libro.stock} onAdd={addHandler} />
                    }
                </div>
            </div>   
        </div>
        )
    }


export default ItemDetail;