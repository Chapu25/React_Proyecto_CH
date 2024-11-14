import { useEffect, useState } from "react"
import { Card } from "../../common/card/Card"
import "./itemListContainer.css"
import { products } from "../../../products"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../../firebaseConfig"
import { getDocs, collection,  query, where, addDoc } from "firebase/firestore"



export const ItemListContainer = (  ) => {
    const {name} = useParams()
    const [items, setItems] = useState([])

    useEffect(()=>{
        
       const productsCollection = collection(db, "products");
       
       let docsRef = productsCollection

       if(name){
        docsRef = query(productsCollection,  where("category", "==", name))
       }
       getDocs(docsRef).then((res) => {
        const arrayEntendible = res.docs.map( (doc) => {
            return{...doc.data(), id: doc.id}
            })

            setItems(arrayEntendible)
    });     

    },[ name ])


    if (items.length === 0) {
        return <h1>Cargando...</h1>
    }


    /* const funcionAgregar = () =>{
        const productsCollection = collection(db,"products")

        products.forEach((product)=>{
            addDoc(productsCollection, product)
        })
    } */

    return ( 

        <div>
            <ItemList items={items} />

            {/* <button onClick={funcionAgregar}>Cargar mas Productos</button> */}
        </div>
    
    );
}
