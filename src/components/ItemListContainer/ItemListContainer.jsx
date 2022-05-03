import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Libros from "../../data/Libros";
import ItemList from "../ItemList/ItemList";

function getLibros () {
    return new Promise ((resolve, reject) => {
        setTimeout ( () =>{
            resolve (Libros);
        },2000 );
    }
    )}

const ItemListContainer = ({ greeting }) =>{

    const [libros, setLibros] = useState([]);
    useEffect ( () => {
        getLibros().then (response => {
          setLibros (response)
        })
    }, []);

    return (
        <>
        <section>
            <h3>{greeting}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Modi quisquam error necessitatibus in, explicabo, voluptatibus enim quae, 
                facere commodi voluptatum nihil! Sit eveniet consequuntur labore nesciunt ipsa alias nulla quidem?
            </p>
        </section>
        <section>
            <ItemList libros= { libros } />
            <ItemCount stock= {7} initial= {1} /> 
        </section>
        </>
    )
}

export default ItemListContainer;