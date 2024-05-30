import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import ItemsDestacados from "./ItemsDestacados";


const ItemDetail = ({ item  }) => {
  const {addItem}= useContext(CartContext);

  const valorCuota = item.ctas > 0 ? item.precio / item.ctas : null;
  
  const onAdd=(quantity)=>{
    addItem(item, quantity);
  }



  return (
    <div className="container">

      <div className="row my-5">
        <div className="col-md-4 offset-md-1">
          <img src={item.img} className="img-fluid" alt={item.nombre} />
        </div>
        <div className="col"></div>
        <div className="col-md-6">
          <div className="row">
            <h1 className="fs-3 text-primary">{item.nombre}</h1>
            
            <p>{item.descripcion}</p>
            <p className="fs-2">
              <b>$ {item.precio}</b>
            </p>
            {item.ctas > 0 && valorCuota !== null && (
              <p>
                <b>{item.ctas}</b> CUOTAS DE <b>${valorCuota.toFixed(2)}</b>
              </p>
            )}
            {item.ctas <= 0 && (
              <p className="fw-lighter">
                No hay opciones de financiamiento disponibles.
              </p>
            )}
            <ItemCount stock={item.stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
      <div className="row my-5">
            <ItemsDestacados/>
      </div>
    </div>
  );
};

export default ItemDetail;
