import React from 'react'
import "./itemDetail.css"
import Counter from '../../common/Counter/Counter'

export const ItemDetail = ({item, agregarAlCarrito, totalInCart}) => {

  return (

    <div className='contenedorDetailPadre'>


      <div className='contenedordetalles'>
        <h2>{item.title}</h2>
        <span>Su precio es:  ${item.price}</span>
        <p>{item.description}</p>

        <Counter stock={item.stock} 
        agregarAlCarrito={agregarAlCarrito} 
        totalInCart={totalInCart}/>
      </div>


      <div className='contenedorimagen'>
        <img src={item.imagenUrl} alt="" />
      </div>


    </div>
  )
}
