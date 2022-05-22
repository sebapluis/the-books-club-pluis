import {  useState } from "react"
import { useCartContext } from "../../context/CartContext";
import { collection, addDoc, getFirestore} from "firebase/firestore";


const Checkout = () => { 
    const [orderId, setOrderId] = useState();

    const db = getFirestore();

    const {cartList, totalPrice, emptyCart} = useCartContext();

    const [buyer, setBuyer] = useState ({
        Nombre:"",
        Email:"",
        Telefono:""
    }) ;

    const {Nombre, Email, Telefono} = buyer;

    const handleInputChange = (e) => {
       setBuyer (({
           ...buyer,
           [e.target.name]:e.target.value
       }))
    }

    const generateOrder = async (data) =>{
        try {
            const col = collection( db, "orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            emptyCart()
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = cartList.map( e => {return{ id:e.id, title:e.title, price:e.precio, amount:e.quantity}})
        const total = totalPrice();
        const data = {buyer, items, total, dia}
        console.log("data:",data)
        generateOrder(data)
    }

        
   

  return (
    <>
    {!orderId && <div>
        <h1>Finalizando compra</h1>
        <hr />
        <h4>Completar datos:</h4>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" name='Nombre' placeholder='Nombre' value={Nombre} onChange={handleInputChange} required />
            <br />
            <input type="email" name='Email' placeholder='Email' value={Email} onChange={handleInputChange} required/>
            <br />
            <input type="number" name='Telefono' placeholder='Telefono' value={Telefono} onChange={handleInputChange} required/>
            <br />
            <input type="submit" value="Finalizar Compra" />
        </form>
    </div> 
    } 
    <div>
        {orderId && (
            <h4>Compra Realizada con exito, su codigo es: ${orderId}</h4>
        )}
    </div>  
    </>
  )
}

export default Checkout
