import React from 'react';
import { Button } from 'react-bootstrap';
import Card  from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';

function ItemList( {libros} ) {
  return (
      <>
    {libros.map( thislibro => {
        return(
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body bg="dark">
            <Card.Title> {thislibro.Title} </Card.Title>
            <Card.Text>
                {thislibro.title}
                <br/>
                {thislibro.autor}
            </Card.Text>
            <ItemCount />
            <Button variant="secondary">Ver mas</Button>
            </Card.Body>
            </Card>
        </>
        )
    })}
  </>)
}

export default ItemList;