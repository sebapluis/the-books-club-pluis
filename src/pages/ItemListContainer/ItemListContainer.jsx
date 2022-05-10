import { useEffect, useState } from "react";
/*import Libros from "../../data/Libros";*/
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";




function getLibros (category) {
    const promise = new Promise ((resolve, reject) => {
        const productList = [
            {
                id : 1,
                title : "El ruiseñor",
                autor : "Kristin Hannah",
                editorial : "Penguin random house", 
                precio: 18,
                stock: 8,
                category: "novela",
                imagen: "https://pictures.abebooks.com/inventory/md/md30626702718.jpg",
                sinopsis:"Francia, 1939. En el tranquilo pueblo de Carriveau, Vianne Mauriac se despide de su marido, Antoine, que debe marchar al frente. Ella no cree que los nazis vayan a invadir Francia, pero lo hacen, con batallones de soldados marchando por las calles, con caravanas de camiones y tanques, con aviones que llenan los cielos y lanzan bombas sobre los inocentes. Cuando un capitán alemán requisa la casa de Vianne, ella y su hija deben convivir con el enemigo o arriesgarse a perderlo todo. Sin comida ni dinero ni esperanza, Vianne se ve obligada a tomar decisiones cada vez más difíciles para sobrevivir."
            },
            {
                id : 2,
                title : "Mi planta de naranja lima",
                autor : "Jose Mauro De Vasconcelos",
                editorial : "libros del asteroide", 
                precio: 10,
                stock: 5,
                category: "novela",
                imagen: "https://pictures.abebooks.com/isbn/9788492663439-es.jpg",
                sinopsis: "Publicada por primera vez en 1968, Mi planta de naranja lima es la emocionante historia de un niño al que la vida hará adulto precozmente. En esta novela, José Mauro de Vasconcelos recreó sus recuerdos de infancia en el barrio carioca de Bangú con un lirismo y una ternura que cautivaron a los lectores desde su aparición y que la han convertido en uno de los libros más leídos de la literatura brasileña contemporánea."
            },
            /*{
                id : 3,
                title : "Los chicos de la Nickel",
                autor : "Colson Whitehead",
                editorial : "Random House", 
                precio: 20,
                stock: 15,
                category: "novela",
                imagen: "https://static.fnac-static.com/multimedia/Images/ES/NR/63/35/5b/5977443/1540-1.jpg",
                sinopsis: "Desde pequeño, Elwood Curtis ha escuchado con devoción, en el viejo tocadiscos de su abuela, los discursos de Martin Luther King. Sus ideas, al igual que las de James Baldwin, han hecho de este adolescente negro un estudiante prometedor que sueña con un futuro digno. Pero de poco sirve esto en la Academia Nickel para chicos: un reformatorio que se vanagloria de convertir a sus internos en hombres hechos y derechos pero que oculta una realidad inhumana respaldada por muchos y obviada por todos. Elwood intenta sobrevivir a este lugar junto a Turner, su mejor amigo en la Nickel. El idealismo de uno y la astucia del otro les llevará a tomar una decisión que tendrá consecuencias irreparables."
            },*/
            {
                id : 4,
                title : "El rastro de los rusos muertos",
                autor : "Vicente Valles",
                editorial : "Espasa", 
                precio: 10.44,
                stock: 8,
                category: "historia",
                imagen: "https://m.media-amazon.com/images/I/41U16y0Z+8L.jpg",
                sinopsis: "A través de una intrigante cadena de asesinatos y muertes inexplicadas de espías y diplomáticos rusos por todo el mundo, Vicente Vallés nos sumerge en un relato tan trepidante como real. ¿Intenta Rusia desestabilizar y provocar situaciones de crisis para conquistar a la opinión pública occidental? ¿Es Donald Trump presidente de Estados Unidos gracias a la interferencia de Vladímir Putin? ¿Son los mafiosos que se instalaron en la costa española una correa de transmisión del Kremlin? ¿Han manipulado los servicios secretos rusos a las sociedades democráticas para condicionar procesos electorales en Francia, Países Bajos, Alemania, España o Italia? Quizá nada de esto haya ocurrido, pero el poder de la Rusia de Putin reside en que todos creen que sí ha ocurrido."
            }
        ];
        const productsFiltered = category ? productList.filter(p => p.category === category) : productList;
        setTimeout ( () =>{
            resolve (productsFiltered);
        },2000 );
    });
    return promise
    }

const ItemListContainer = ({ greeting }) =>{

    const [libros, setLibros] = useState([]);

    const { categoryId } = useParams();

    useEffect ( () => {
        getLibros(categoryId).then (response => {
          setLibros (response)
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