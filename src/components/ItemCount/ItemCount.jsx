import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';


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
        <Button onClick= {resta} variant="dark" className='p-0 mb-2'> - </Button>
        <span className='cantidad'> { count } </span>
        <Button onClick= {suma} variant="dark" className='p-0 mb-2'> + </Button>
        <div>
            <Button variant="dark" onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</Button>
        </div>
    </div> 
  )
}

export default ItemCount;