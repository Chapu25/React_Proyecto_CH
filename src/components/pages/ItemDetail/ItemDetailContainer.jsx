import React, { useContext, useEffect, useState } from 'react'
import { ItemDetail } from './ItemDetail'
import { products } from "../../../products"
import { useParams } from "react-router-dom"
import { CartContext } from '../../../context/CartContext'
import { db } from '../../../firebaseConfig'
import { collection ,getDoc, doc } from 'firebase/firestore'

export const ItemDetailContainer = () => {

  const {id} = useParams()
  const {addToCart, getTotalQuantity}  = useContext(CartContext)

  let totalInCart = getTotalQuantity(id)


  const [item,  setItem] = useState({});

    useEffect(()=>{
        const productsCollection = collection( db , "products" )
        const docRef =  doc( productsCollection , id )
        getDoc(docRef).then((res) =>{
          setItem({...res.data(), id: res.id })
        })
    },[ id ])

    const agregarAlCarrito = (cantidad)=>{
      let objeto = {...item, quantity: cantidad}
      addToCart(objeto)
    }

  return <ItemDetail item={item}  agregarAlCarrito={agregarAlCarrito} totalInCart={totalInCart} />

}
