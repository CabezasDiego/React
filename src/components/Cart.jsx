import { useContext } from "react";
import  { CartContext} from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/img/trash3.svg";
import CarritoVacio from "./CarritoVacio";

const Cart = () => {
    const {cart, removeItem, clear, getSumProducts, getCountProducts, getSumPriceProducts} = useContext(CartContext);
   

    return(
        getCountProducts() == 0 ? (<CarritoVacio/>) : (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td className="text-star text-primary fs-5"><b>Producto</b></td>
                            <td className="text-end text-primary fs-5 "><b>Precio unitario</b></td>
                            <td className="text-end text-primary fs-5 "><b>Cantidad</b></td>
                            <td className="text-end text-primary fs-5 "><b>Precio</b></td>
                            <td className="text-center"><button className="btn text-white bg-danger fw-bold rounded-0" onClick={clear}>Vaciar Carrito</button></td>
                        </tr>
                        {cart.map(item =>(
                            <tr key={item.id}>
                                <td><img src={item.img} alt={item.nombre} width={90} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="text-end align-middle">${item.precio}</td>
                                <td className="text-end align-middle">{item.quantity}</td>
                                <td className="text-end align-middle">${item.precio*item.quantity}</td>
                                <td className="text-center align-middle"><img src={trash} width={24} alt="eliminar" title="Eliminar Producto" onClick={()=>{removeItem(item.id)}}/></td>
                            </tr>
                        ))}
                        <tr>
                            <td>&nbsp;</td>
                            <td colSpan={2} className="fs-5 text-success"><b>Total</b></td>
                            <td className="text-end text-success fs-5"><b>{getCountProducts()}</b></td>
                            <td className="text-end text-success fs-5"><b>${getSumPriceProducts()}</b></td>
                            {/* <td>&nbsp;</td> */}
                            <td className="text-center"><Link to={"/checkout"} className="btn text-white fw-bold bg-success rounded-0">Ckeckout</Link></td>

                        </tr>
                    </tbody>

                </table>
                </div>
            </div>
        </div>
        
    )
)}

export default Cart;