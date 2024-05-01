import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {
  const valorCuota = item.ctas > 0 ? item.precio / item.ctas : null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-1">
          <img src={item.img} className="img-fluid" alt={item.nombre} />
        </div>
        <div className="col-md-4">
          <div className="row">
            <h1 className="fs-4">{item.nombre}</h1>
            <p className="fs-2">
              <b>$ {item.precio}</b>
            </p>
            <p>{item.descripcion}</p>

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
            <ItemCount stock={item.stock} />
          </div>
          <div className="row py-4">
              {/* acá va contenido a contruir para rellenar espacio */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
