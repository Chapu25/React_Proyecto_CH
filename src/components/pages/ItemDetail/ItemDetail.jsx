import React from 'react'
import "./itemDetail.css"

export const ItemDetail = ({item}) => {
  return (
    <div className='contenedorDetailPadre'>

      <div className='contenedordetalles'>
        <h2>{item.title}</h2>
        <span>Su precio es:  ${item.price}</span>
        <button>Agregar al Carrito</button>

      </div>

      <div className='contenedorimagen'>
        <img src={item.imagenUrl} alt="" />
      </div>

    </div>
  )
}
