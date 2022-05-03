import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail( {libros} ) {
  return (
      <>
    {libros.map( thislibro => {
        return(
        <>
            <h2>{thislibro.title}</h2>
            <h3>{thislibro.autor}</h3>
            <h4>{thislibro.editorial}</h4>
            <h4>{thislibro.precio}</h4>
            <ItemCount/>
        </>
        )
    })}
  </>)
}

export default ItemDetail;