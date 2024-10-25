import { Link } from "react-router-dom"


export const Card = ({title, price, stock, imagenUrl, id} ) => {
return (

    <div style={{ border: "2px solid black", width: "200px", height:"300px"}}>

        <h2>Titulo: {title}</h2>
        <h3>Precio:  {price}</h3>
        <img style={{width:"100px"}} src={imagenUrl} alt="logo" />
        <h3>Stock:  {stock}</h3>
        <Link to={`/itemDetail/${id}`}>
            <button>Ver Detalles</button>
        </Link>

    </div>

)
}
