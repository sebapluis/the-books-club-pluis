import React from 'react';
import { Button } from 'react-bootstrap';
import Card  from 'react-bootstrap/Card';
import "./ItemList.css";

function ItemList( {libros} ) {
  return (
      <>
    {libros.map( thislibro => {
        return(
        <div className='cardContainer'>
            <Card style={{ width: '18rem' }} className="card">
             <div>
              <Card.Img variant="top" src= {thislibro.imagen} className="foto img-fluid" />
              </div> 
            <Card.Body bg="dark">
            <Card.Title> <h3>{thislibro.Title}</h3> </Card.Title>
            <Card.Text className='centrado'>
                <h3>{thislibro.title}</h3>
                <br/>
                <h5>{thislibro.autor}</h5>
            </Card.Text>
              <Button variant="secondary" classname="centrado">Detalle</Button>  
            </Card.Body>
            </Card>  
        </div>
        )
    })}
  </>)
}

export default ItemList;


