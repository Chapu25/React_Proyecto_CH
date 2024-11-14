import React, { useContext } from 'react'
import "./cartContainer.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { products } from '../../../products'

export const CartContainer = () => {

   const {cart, resetCart, removeById, getTotalAmount} = useContext(CartContext)

   let totalEnElCarrito = getTotalAmount()
  
  return (
    <div className='contenedorcarrito' >
      <h1>Tu carrito</h1>

      {
        cart.map((product) =>{
          return (
            <div key={product.id} className="contenedor-producto">
              <img src={product.imagenUrl} alt={product.name} />
              <p>{product.name}</p>
              <p>Precio: ${product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <p>Total: ${product.price * product.quantity}</p>
              <button onClick={ ()=> removeById(product.id) }>Eliminar</button>
              </div>
            )
        })
      }

      <div className='contenedorbotones'>
        {cart.length > 0 && <button onClick={resetCart}>Limpiar Carrito</button>}

        <h2>El total a pagar es: {totalEnElCarrito} </h2>

        <div className='contenedorboton'>
          <Link to="/checkout"><button>Finalizar Compra</button></Link>
        </div>
      </div>
      
    </div>
    

  )
}
