import { Card } from "../../common/card/Card"

export const ItemList = ({items}) => {
  
  return (
    <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
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
  )
}
