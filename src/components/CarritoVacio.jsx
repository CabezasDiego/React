import { Link } from "react-router-dom";
import carrito from "../assets/img/ShoopingCart.png"  

import ItemsDestacados from "./ItemsDestacados";

const CarritoVacio = () => {
    
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center my-5">
                    <div className="alert alert-primary border-0 my-5" role="alert">
                        <h3 className="my-5 display-3 fw-bold">No hay productos en el carrito</h3>
                        <div className="col text-center">
                            <img src={carrito} width={350} />
                        </div>

                        <Link to={"/"} className="btn text-white bg-primary rounded-0 btn-lg my-5 fs-3"> Volver a la página principal</Link>
                    </div>
                </div>
            </div>
            <ItemsDestacados/>
            
        </div>

    )
}

export default CarritoVacio;