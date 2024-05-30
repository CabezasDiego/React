import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card border-0 text-center mt-3">
      <Link to={"/item/" + item.id} className="text-dark text-decoration-none">
        <img src={item.img} className="card-img-top " alt={item.nombre} />
        <div className="card-body">
          <p className="card-title fs-5 fw-medium ">{item.nombre}</p>
          <p className="card-title fst-italic ">{item.descripcion}</p>
          <p className="fw-bolder fs-5">$ {item.precio}</p>
          
        </div>
      </Link>
    </div>
  );
};

export default Item;
