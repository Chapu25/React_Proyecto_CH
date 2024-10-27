import { Link } from "react-router-dom"
import "./card.css"


export const Card = ({title, price, stock, imagenUrl, id} ) => {

return (

    <div className="contenedorCarta">

        <h2>{title}</h2>
        <h3>$ {price}</h3>
        <img src={imagenUrl} alt="logo" />
        <h3>Stock:  {stock}</h3>
        <Link to={`/itemDetail/${id}`}>
            <button>Ver Detalles</button>
        </Link>
        
    </div>

)
}
