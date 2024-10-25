import React from 'react'

export const ItemDetail = ({item}) => {
  return (
    <div>
        <h2>Titulo es: {item.title}</h2>
        <img src={item.imagenUrl} alt="" />
    </div>
  )
}
