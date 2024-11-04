import React, { useContext, useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from "../../../products"
import { useParams } from "react-router-dom"
import { CartContext } from '../../../context/CartContext'

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const {addToCart, getTotalQuantity}  = useContext(CartContext)

  let totalInCart = getTotalQuantity(id)


  const [item,  setItem] = useState({});

    useEffect(()=>{
        let productsSelected = products.find((producto) => producto.id === id )
        setItem(productsSelected)
    },[ id ])

    const agregarAlCarrito = (cantidad)=>{
      let objeto = {...item, quantity: cantidad}
      addToCart(objeto)
    }

  return <ItemDetail item={item}  agregarAlCarrito={agregarAlCarrito} totalInCart={totalInCart} />

}
