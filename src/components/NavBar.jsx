import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.webp";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div>
            <div className="container-fluid pb-2 bg-black">
                <div className="row align-items-center text-light text-center pt-1">
                    
                    <p className="m-0 small fw-light">Envíos GRATIS a partir de $60.000</p>
                    
                </div>
            </div>
            <div className="container text-center p-2">
                <div className="row align-items-center">
                    <div className="col-md-2 ">
                        <Link to={"/"}><img src={logo} className="img-fluid" alt="Caschy"/></Link>
                    </div>
                    <div className="col-md-7 fs-5">
                        <ul className="nav justify-content-center">
                            <li className="nav-item text-black">
                                <NavLink className="nav-link text-dark active" to={"/"}>INICIO</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link text-dark dropdown-toggle" to={"/category/todo"} role="button" data-bs-toggle="dropdown">
                                    PRODUCTOS
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to={"/category/mates"}>Mates</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/category/termos"}>Termos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/category/tazas"}>Tazas</NavLink></li>
                                    <li><NavLink className="dropdown-item" to={"/category/vasos"}>Vasos</NavLink></li>
                                    <li><NavLink className="dropdown-item fw-semibold" to={"/category/productos"}>Todos</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item text-end">
                                <NavLink className="nav-link text-dark" to={"/contacto"}>CONTACTO</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 align-self-end">
                        <CartWidget />
                    </div>
                </div>
            </div>

        </div>

    )

}

export default NavBar;