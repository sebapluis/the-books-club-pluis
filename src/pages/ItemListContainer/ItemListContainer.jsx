import { useEffect, useState } from "react";
/*import Libros from "../../data/Libros";*/
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";




function getLibros (category) {
    const db = getFirestore();

    const ItemsCollections = collection ( db, "items" );

    const q = category && query(
        ItemsCollections,
        where ( "category", "==", category)
    );

    return getDocs(q || ItemsCollections);
    }

const ItemListContainer = ({ greeting }) =>{
    const [libros, setLibros] = useState([]);
    const { categoryId } = useParams();

    useEffect ( () => {
        getLibros(categoryId).then (snapshot => {
        setLibros (snapshot.docs.map( doc => {
            return { ...doc.data(), id: doc.id}
        }))
        })
    }, [categoryId]);

    return (
        <>
        <section>
            <h3>{greeting}</h3>
        </section>
        <section>
            <ItemList libros= { libros } />
        </section>
        </>
    )
}

export default ItemListContainer;