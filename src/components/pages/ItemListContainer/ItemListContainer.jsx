import { useEffect, useState } from "react"
import { Card } from "../../common/card/Card"
import "./itemListContainer.css"
import { products } from "../../../products"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = (  ) => {
    const {name} = useParams()
    const [items, setItems] = useState([])

    useEffect(()=>{

        const unaFraccion = products.filter(
            (producto) => producto.category === name);

        const getProducts = new Promise((resolve , reject) =>{
            resolve(name ? unaFraccion : products);
        });
        getProducts.then((res)=>{
            setTimeout(() => {
                setItems(res) 
            }, 2000);
        })
    },[ name ])


    if (items.length === 0) {
        return <h1>Cargando...</h1>
    }
    return ( <ItemList items={items} />);
}
