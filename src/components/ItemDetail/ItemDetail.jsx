import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail( {libro} ) {
  return (
        <>
            <h2>{libro.title}</h2>
            <h3>{libro.autor}</h3>
            <h4>{libro.editorial}</h4>
            <h4>{libro.precio}</h4>
            <ItemCount/>
        </>
        )
    }


export default ItemDetail;