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
                <h1>{libro.title}</h1>
                <h3>Autor: {libro.autor}</h3>
                <h4>Editorial: {libro.editorial}</h4>
                <h4>Precio: €{libro.precio}</h4>
                <ItemCount/>
            </div>   
        </div>
        )
    }


export default ItemDetail;