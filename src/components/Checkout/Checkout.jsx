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
        <h1 className="centrado mt-3">Finalizando compra</h1>
        <hr />
        <h4 className="centrado mt-4">Completar datos:</h4>
        <br />
        <form onSubmit={handleSubmit} className="centrado">
            <input type="text" name='Nombre' placeholder='Nombre' value={Nombre} onChange={handleInputChange} required className="m-3" />
            <br />
            <input type="email" name='Email' placeholder='Email' value={Email} onChange={handleInputChange} required className="m-3"/>
            <br />
            <input type="number" name='Telefono' placeholder='Telefono' value={Telefono} onChange={handleInputChange} required className="m-3"/>
            <br />
            <input type="submit" value="Finalizar Compra" className="btn btn-success m-3"/>
        </form>
    </div> 
    } 
    <div>
        {orderId && (
            <div className="container">
                <h2 className="centrado mt-5">Compra Realizada con exito, su codigo es: ${orderId}</h2>
            </div> 
        )}
    </div>  
    </>
  )
}

export default Checkout
