import React, { useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from "../../../products"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

  const {id} = useParams()

  const [item,  setItem] = useState({});

    useEffect(()=>{
        let productsSelected = products.find((producto) => producto.id === id )
        setItem(productsSelected)
    },[ id ])

  return <ItemDetail item={item}/>
}
