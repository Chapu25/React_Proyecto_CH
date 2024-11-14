import { useState } from "react";

 

const Counter = ( {stock, agregarAlCarrito, totalInCart} ) => {
  const [contador, setContador] = useState(1);

  const sumar = () => { 
    stock - totalInCart > contador ? setContador(contador + 1) : alert("Stock Maximo")
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div style={{ margin: "50px",}} >
      <h2>Contador = {contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={restar}>restar</button>

      <button onClick= {()=> agregarAlCarrito(contador)} >Agregar al Carrito</button>
    </div>
  );
};

export default Counter;




