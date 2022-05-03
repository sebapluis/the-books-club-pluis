import { useEffect, useState } from "react";
import Libros from "../../data/Libros";
import ItemDetail from "../ItemDetail/ItemDetail";

function getLibro () {
    return new Promise ((resolve, reject) => {
        setTimeout ( () =>{
            resolve (Libros);
        },1000 );
    }
    )}

const ItemDetailContainer = () =>{

    const [libro, setLibro] = useState([]);
    useEffect ( () => {
        getLibro().then (response => {
          setLibro (response[1])
        })
    }, []);

    return (
        <>
            <ItemDetail libro = { libro } />
        </>
    )
}

export default ItemDetailContainer;