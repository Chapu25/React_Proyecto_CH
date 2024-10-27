import { Card } from "../../common/card/Card"
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
    </div>
  )
}
