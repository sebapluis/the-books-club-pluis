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
          <div className="h-75 d-inline-block mx-5 my-3 p-2">
            <Card style={{ width: '10rem'}} className="rounded">
              <div className='imgContenedor'>
              <Card.Img variant="top" src= {thislibro.imagen} className="img-fluid foto" />
              </div>
              <Card.Body bg="dark" className='justify-content-center'>
                <Card.Title> <h6>{thislibro.Title}</h6> </Card.Title>
                <Card.Text className='centrado'>
                  <h6>{thislibro.title}</h6>
                </Card.Text>
                <div className='d-flex justify-content-center align-content-center'>
                  <Link to={"/item/" + thislibro?.id} className="centrado justify-content-center">
                    <Button variant="dark" className="p-0">Detalle</Button>
                  </Link>  
                </div>
              </Card.Body>
            </Card> 
          </div>   
        )
    })}
  </>)
}

export default ItemList;


