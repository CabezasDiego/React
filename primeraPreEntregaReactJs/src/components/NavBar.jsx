import logo from "../assets/img/logo.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row align-items-center bg-black text-light text-center">
                    <div className="col">
                    <p>HASTA 3 CUOTAS SIN INTERES - ENVIOS A TODO EL PAIS - DESCUENTO EN EFECTIVO O TRANSFERENCIA</p>
                    </div>
                </div>
            </div>
            <div className="container ">
                <div className="row align-items-center">
                    <div className="col-2 ">
                        <a href="#"><img src={logo} alt="La Usina" width={160} /></a>
                    </div>
                    <div className="col-8">
                        <ul className="nav justify-content-center">
                            <li className="nav-item text-black">
                                <a className="nav-link text-dark active" href="#">INICIO</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-dark dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    PRODUCTOS
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Mates</a></li>
                                    <li><a className="dropdown-item" href="#">Termos</a></li>
                                    <li><a className="dropdown-item" href="#">Bombillas</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">COMO COMPRAR</a>
                            </li>
                            <li className="nav-item text-end">
                                <a className="nav-link text-dark" href="#">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col text-end">
                        <CartWidget />
                    </div>
                </div>
            </div>

        </div>

    )

}

export default NavBar;