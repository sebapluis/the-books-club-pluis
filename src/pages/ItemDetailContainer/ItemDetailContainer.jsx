import { useEffect, useState } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function getLibro (id) {
    const db = getFirestore();

    const itemRef = doc ( db, "items", id);

    return getDoc (itemRef);
};


const ItemDetailContainer = () =>{

    const [libro, setLibro] = useState([]);

    const { id } = useParams ();


    useEffect ( () => {
        getLibro(id).then (snapshot => {
          setLibro ({...snapshot.data(), id: snapshot.id})
        })
    }, [id]);

    return (
        <>
            <ItemDetail libro = { libro } />
        </>
    )
}

export default ItemDetailContainer;