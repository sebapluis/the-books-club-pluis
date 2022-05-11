import React, { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState (initial);

  function suma (){
      if (count < stock ) setCount( count + 1);
  }

  function resta(){
    if (count >= 2) setCount( count - 1);
  }

  return (
    <div>
        <button onClick= {resta} > - </button>
        <span className='cantidad'> { count } </span>
        <button onClick= {suma} > + </button>
        <div>
            <button onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
        </div>
    </div> 
  )
}

export default ItemCount;