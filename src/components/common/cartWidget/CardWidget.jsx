import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardWidget = () => {
return (
        <Link to={"/cart"}>
            <FaShoppingCart style={{fontSize: "30px"}}/>
            <span style={{fontSize: "20px"}} >0</span>
        </Link>
)
}
