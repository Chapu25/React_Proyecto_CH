import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "./checkout.css"

 

export const Checkout = () => {

    const {cart, getTotalAmount, resertCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        phoneNumber: "",
    });


    const funcionDelFormulario = (evento) => {
        evento.preventDefault();
        console.log('Formulario enviado');
        const total = getTotalAmount()
        

        const order = {
            buyer: userInfo,
            items: cart,
            total: total,
        };

        let refCollection = collection(db, "orders");
        addDoc(refCollection, order).then((res) => {
            setOrderId(res.id)
            resertCart()
        })



        let refCol = collection( db, "products");

        order.items.forEach((item)=>{
            let refDoc = doc(refCol, item.id)
            updateDoc(refDoc, {stock: item.stock - item.quantity})
        })

    }

    
    const capturarInfo = (evento) =>{
        setUserInfo({ ...userInfo,[evento.target.name]: evento.target.value })
    }


    if (orderId) {
        return <h2>Gracias por tu compra tu orden es: {orderId}</h2>
    }


  return (

    <div >

        <form className="contenedorCheckout" onSubmit={funcionDelFormulario}>

            <input type="text" placeholder="Nicolas" name="name" onChange={capturarInfo}/>

            <input type="email" placeholder="nicosanchez@gmail.com" name="email" onChange={capturarInfo}/>

            <input type="text" placeholder="1130079402" name="phoneNumber" onChange={capturarInfo}/>

            <div className="contenedorBotones">
                <button type="submit">Comprar</button>
                <button type="button">Cancelar</button>
            </div>

        </form>
        
    </div>
  )
}
