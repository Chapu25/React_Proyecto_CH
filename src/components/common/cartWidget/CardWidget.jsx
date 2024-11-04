import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CardWidget = () => {

    const {cart}= useContext(CartContext);
return (
        <Link to={"/cart"}>
            <FaShoppingCart style={{fontSize: "30px"}}/>
            <span style={{fontSize: "20px"}} >{cart.length}</span>
        </Link>
)
}
