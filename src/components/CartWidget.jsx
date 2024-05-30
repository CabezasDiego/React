import { Link } from "react-router-dom";
import cart from "../assets/img/cart.svg";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
const {getCountProducts}=useContext(CartContext);

return (
        <>

        <Link to="/cart" className="btn position-relative">
            <img src={cart} alt="Carrito" width={32} />
            { getCountProducts() > 0 ? (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getCountProducts()}<span className="visually-hidden">unread messages</span>
                </span>) :("")
            }
        </Link>
        </>
    )
}


export default CartWidget;