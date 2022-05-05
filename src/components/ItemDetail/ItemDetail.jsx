import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";


function ItemDetail( {libro} ) {
  return (
        <div className='flex-container'>
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
                <ItemCount stock={libro.stock} initial={1} />
            </div>   
        </div>
        )
    }


export default ItemDetail;