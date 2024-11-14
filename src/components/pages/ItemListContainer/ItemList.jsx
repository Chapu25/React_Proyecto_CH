import { Card } from "../../common/card/Card"
import ModalCustom from "../ModalCustom"
import "./itemList.css"

export const ItemList = ({items}) => {
  
  return (
    <div className="contenedorItemList">

      <h1>Listado de Productos:</h1>
      
      <div className="subconteneritemlist">
        {
          items.map( ({id,title,price,stock,imagenUrl}) => (
            <Card key={id} 
            title={title}
            price={price}
            stock={stock}
            imagenUrl={imagenUrl}
            id={id}
            />
          ))
        };
      </div>


      {/* <ModalCustom title="Titulo custom" >
        <div>
          <h5>Un formulario</h5>
          <form action="">
            <input type="text" placeholder="nombre aqui" />
          </form>
        </div>
      </ModalCustom>

      <ModalCustom title="Titulo custom" >
        <div>
          <button>Sumar</button>
        </div>
      </ModalCustom> */}

    </div>
  )
}
