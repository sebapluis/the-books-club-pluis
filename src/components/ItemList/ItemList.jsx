import React from 'react';
import Card  from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom';
import "./ItemList.css";

function ItemList( {libros} ) {
  return (
      <>
    {libros.map( thislibro => {
        return(
          <div className="h-75 d-inline-block m-4 p-2">
            <Card style={{ width: '10rem' }}>
              <div className='imgContenedor'>
              <Card.Img variant="top" src= {thislibro.imagen} className="img-fluid foto" />
              </div>
              <Card.Body bg="dark">
                <Card.Title> <h6>{thislibro.Title}</h6> </Card.Title>
                <Card.Text className='centrado'>
                  <h6>{thislibro.title}</h6>
                </Card.Text>
                <Link to={"/item/" + thislibro?.id} className="centrado">
                  <Button variant="dark" className="p-0">Detalle</Button>
                </Link>  
              </Card.Body>
            </Card> 
          </div>   
        )
    })}
  </>)
}

export default ItemList;


